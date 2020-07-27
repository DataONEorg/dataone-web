{{- $site := . -}}
{{- $p := $site.Params.prefix -}}
{{- $bn := print $p "globalHeader" -}}

/**
 * {{ $bn }} - Functions for the nav block: show/hide submenus, show login info, etc.
 */ 
(function( {{ $bn }}, undefined ) {

    var block = {{ $bn }};
  
    const
        // The token url
        tokenUrl = "{{- $site.Params.links.d1TokenUrl | default `https://cn.dataone.org/portal/token` -}}",
        // If there is a MetacatUI variable, then this JS is running on the MetacatUI website
        isMCUI = typeof MetacatUI !== 'undefined',
        // The full url to the DataONE instance of MetacatUI. First check for a url set in MetacatUI, then default to the Hugo parameter
        urlMCUI = "{{- $site.Params.links.metacatuiBase | default `https://search.dataone.org` -}}",
        // The full url for the Hugo website
        baseUrl = "{{- $site.BaseURL | default `https://dataone.org` -}}",
        // The selector for the element that contains text (link name) in the submenu links
        subLinkTextSelector = ".{{ $p }}menu-item__sub-item-name";
        
    var lastScroll = 0,
        closeDropdownTimeout = 0;

  /**  
   * initialize - Function to run once the navbar elements are loaded.
   * Select the elements that we need for other functions and set listeners.
   * Get user data and update the user profile menu & sub-menu.
   * Change some URLs to relative for MetacatUI.
   */   
  block.initialize = function(){

    selectElements();
    setListeners();
    
    // Check if user data is already in local storage. 
    // If it is, update the menu right away.
    if( getUserData() ){
      updateProfileMenu()
    }
    
    // Even if there is stored user data, get the data again in case
    // user switched accounts or signed out
    // Use different functions in MetacatUI vs the Hugo website
    if(isMCUI){
      // Ensure links are relative in MetacatUI
      updateNavMetacatUI()
    } else {
      // Get the token and update the navbar with user profile info
      getToken()
    }
  }

  /**  
   * selectElements - Select all of the elements that will be updated, make them
   * accessible to other functions by saving them to the block object
   */   
  const selectElements = function(){
    // Select elements that we will manipulate
    // The menu button, menu, and nav
    block.menuButton    = document.getElementById("global-menu-toggle");
    block.menu          = document.getElementById("global-menu");
    block.header        = document.getElementById("nav");
    
    // The signin and profile menu items
    block.signin     = document.querySelector(".{{ $p }}menu-item--sign-in");
    block.profile    = document.querySelector(".{{ $p }}menu-item--profile");
    
    // Save the default term used in the parent of the profile menu, so we can
    // replace it in case there is no username / fullname
    block.profileText   = block.profile.querySelector(".{{ $p }}menu-item__top-item-name");
    block.profileTerm   = block.profileText.innerHTML;
    
    // All the menu link
    block.allMenuLinks = [];
    document.querySelectorAll(".{{ $p }}menu-item a").forEach((link, i) => {
      block.allMenuLinks[i] = { el: link }
    });
    
    // Get the dropdown buttons with corresponding submenus
    block.dropdownEls = [];
    document.querySelectorAll(".{{ $p }}menu-item--dropdown").forEach((container, i) => {
      block.dropdownEls[i] = {
        container : container,
        button    : container.querySelector("button"),
        submenu   : container.querySelector(".{{ $p }}menu-item__sub-menu")
      }
    });
    
    // Save the text and hrefs in the profile menu so that we can reset it later, if needed    
    block.profileLinkEls = [];
    block.profile.querySelectorAll("a").forEach((link, i) => {
      const textEl = link.querySelector(subLinkTextSelector);
      block.profileLinkEls[i] = {
        el: link,
        textEl: textEl,
        originalHref: link.getAttribute("href"),
        // originalHTML: textEl.innerHTML,
        originalDisplay: link.style.display
      }
    });
  }
  
  /**  
   * getToken - Request user data using the token URL set in the site config
   */
  const getToken = function(){
    
    fetch(tokenUrl, {
        method: 'GET',
        dataType: "text",
        credentials: 'include'
      })
      .then(function(response){
        response.text()
          .then(function(text){
            var userData;
            if(text){
              const parsedToken = parseToken(text);
              userData = {
                loggedin: true,
                username: parsedToken.fullName,
                userId: parsedToken.userId || parsedToken.sub
              };
            } else {
              userData = {
                loggedin: false,
                username: "",
                userId: ""
              }
            }
            // Update the menu if the user data has changed
            if(getUserData() != userData){
              saveUserData(userData);
              updateProfileMenu();
            }
            
          }
        );
      })
      .catch(function(error){
        console.log("error fetching user data, error message:");
        console.log(error);
      });
  }
  
  
  /**  
   * const parseToken - Takes a token and extracts user data
   *    
   * @param  {string} token The user token
   * @return {Object}       The user data as an object
   */   
  const parseToken = function(token){
    
    try {
      if(typeof token == "undefined") return "";

      var jws = new KJUR.jws.JWS();
      var result = 0;
      try {
        result = jws.parseJWS(token);
      } catch (ex) {
        result = 0;
      }
      if(!jws.parsedJWS) return "";
      
      return JSON.parse(jws.parsedJWS.payloadS);
      
    } catch (e) {
      console.log("Error parsing token, error message: ");
      console.log(e);
    }
  }
  
  /**  
   * const updateNavMetacatUI - Makes navbar links relative if they are MetacatUI links.
   * Use the MetacatUI User Model to update the profile menu.
   */
  const updateNavMetacatUI = function(){
    
    block.allMenuLinks.forEach((link, i) => {
      link.el.href = link.el.href
        .replace(urlMCUI, "");
    })
    
    // Get the user data from the MetacatUI userModel
    userData = {
      loggedin: MetacatUI.appUserModel.get("loggedIn"),
      username: MetacatUI.appUserModel.get('fullName') ? MetacatUI.appUserModel.get('fullName').charAt(0).toUpperCase() + MetacatUI.appUserModel.get("fullName").substring(1) : MetacatUI.appUserModel.get("username"),
      userId: MetacatUI.appUserModel.get('username')
    }
    
    // Update the menu if the user data has changed
    if(getUserData() != userData){
      saveUserData(userData);
      updateProfileMenu();
    }
  }
  
  /**  
   * const getUserData - retrieves the data saved by saveUserData function and parses it.
   *    
   * @return {Object}  the parsed user data. Returns false if no data was found.
   */
  const getUserData = function(){
    const storedData = localStorage.getItem("userData");
    if(storedData){
      return JSON.parse(storedData);
    } else {
      return false
    }
  }
  
  /**  
   * const saveUserData - stringifies data if needed and saves it be retrieved later with the getUserData function.
   *    
   * @param  {string|Object} data The data to save
   */   
  const saveUserData = function(data){
    if(data){
      if(!(typeof data === 'string' || data instanceof String)){
        data = JSON.stringify(data)
      }
      localStorage.setItem("userData", data);
    }
  }
  
  /**  
   * resetProfileMenu - Remove any user-specific attributes from the profile
   * menu, hide it, and show the sign in button instead.
   */   
  const resetProfileMenu = function(){
    // Remove the user name and set it back to whatever it was initially set to
    block.profileText.innerHTML = block.profileTerm;
    // Show the signin menu, hide the profile menu
    showMenu(block.signin);
    hideMenu(block.profile);
    // Set all the links to their original hrefs and displays
    if(!block.profileLinkEls){ return }
    // Set the profile sublinks to their original values
    block.profileLinkEls.forEach((link, i) => {
      link.el.href = link.originalHref;
      link.el.style.display = link.originalDisplay;
      // link.textEl.innerHTML = link.originalHTML
    });
  }

  /**
   * updateProfileMenu - show the user profile navigation, update the text
   * to show the user's name, and update the links to go to the user's profile.
   */   
  const updateProfileMenu = function(){
    
    if(!block.profile){
      console.warn("Couldn't update profile menu in the navigation bar because the menu element was missing.");
      return
    }
    resetProfileMenu();
    const data = getUserData();
    if(!data){
      console.warn("Couldn't update profile menu in the navigation bar because the user data was missing.");
      return
    }
    if(data.loggedin){
      if(data.username){
        block.profileText.innerHTML = data.username
      }
      showMenu(block.profile);
      hideMenu(block.signin);
      
      // Change the button links to user profile
      block.profileLinkEls.forEach((link, i) => {
        
        // Make the path relative in MetacatUI
        const baseProfileUrl = isMCUI ? "" : urlMCUI;
        link.el.href = link.el.href
          .replace(/USERNAME/, data.userId)
          .replace(/^.*?SEARCH/, baseProfileUrl);

      });
    }
  }

  /**  
   * showMenu - unhide a menu item in the nav
   *    
   * @param  {HTMLElement} menuEl The menu element to show
   */   
  const showMenu = function(menuEl){
    if(!menuEl) return;
    menuEl.style.display = "block";
  }
  
  /**  
   * hideMenu - hide a menu item in the nav
   *    
   * @param  {HTMLElement} menuEl The menu element to hide
   */   
  const hideMenu = function(menuEl){
    if(!menuEl) return;
    menuEl.style.display = "none";
  }
  
  /**
   * closeAllDropdowns - Closes all the submenus
   */ 
  const closeAllDropdowns = function(){
    if(block.dropdownEls){
      block.dropdownEls.forEach( els  => {
        d1Utilities.toggleElement(els.button, els.submenu, true);
      });
    }  
  }

  /**  
   * stopCloseTimeout - Helps time when the menu should close
   */
  const startCloseTimeout = function (){
    closeDropdownTimeout = setTimeout( () => closeAllDropdowns() , 70 );
  }

  /**  
   * stopCloseTimeout - Helps time when the menu should close
   */
  const stopCloseTimeout   = function () {
    clearTimeout( closeDropdownTimeout );
  };

  /**
   * dropdownMouseenter - Handler function for when the mouse enters
   * the dropdown menu container
   */ 
  const dropdownMouseenter = function(els){
    if(!d1Utilities.isMobile()){
      stopCloseTimeout();
      // ensure other dropdowns are closed
      closeAllDropdowns();
      // open the corresponding submenu
      d1Utilities.toggleElement(els.button, els.submenu, false );
    }
  }

  /**
   * dropdownMouseleave - Handler function for when the mouse leaves
   * the dropdown menu container
   */ 
  const dropdownMouseleave = function(){
    if(!d1Utilities.isMobile()){
      startCloseTimeout()
    }
  }

  /**
   * dropdownClick - Handler function for when a dropdown menu container is
   * clicked.
   */ 
  const dropdownClick = function(els){
    if(d1Utilities.isMobile()){
      // check if opened or closed currently
      var open = JSON.parse(els.button.getAttribute("aria-expanded"));
      // ensure other dropdowns are closed
      closeAllDropdowns();
      // toggle the corresponding submenu
      d1Utilities.toggleElement(els.button, els.submenu, open);
    }
  }

  /**
   * menuButtonClick - Handler function for when a menu button is
   * clicked.
   */ 
  const menuButtonClick = function () {
    if(d1Utilities.isMobile()){
      var open = JSON.parse(block.menuButton.getAttribute("aria-expanded"));
      d1Utilities.toggleElement(block.menuButton, block.menu, open);
      // Menu and search shouldn't be open at the same time.
      // d1Utilities.toggleElement(searchButton, search, true);
      // Close all the dropdowns on menu close or open
      closeAllDropdowns();
    }
  };


  /**
   * searchButtonClick - Handler function for when a search button is
   * clicked.
   */ 
  // var searchButtonClick = function () {
  //   if(searchExists){
  //     var open = JSON.parse(searchButton.getAttribute("aria-expanded"));
  //     d1Utilities.toggleElement(searchButton, search, open);
  //     // TODO: this only works on chrome. On safari/firefox, causes menu to stay open
  //     // if((!open) && searchInput){
  //     //   searchInput.focus();
  //     // };
  //     if(d1Utilities.isMobile()){
  //       d1Utilities.toggleElement(block.menuButton, block.menu, true);
  //     }
  //   } else {
  //     // We don't put the search bar in the nav when on the homepage,
  //     // since the homepage has it's own search bar. Scroll to homepage
  //     // search in this case.
  //     if(searchInput){
  //       searchInput.scrollIntoView({ behavior: "smooth", block:'center' });
  //       searchInput.focus();
  //       if(d1Utilities.isMobile()){
  //         d1Utilities.toggleElement(block.menuButton, block.menu, true);
  //       }
  //     }
  //   }
  //
  // };

  /**
   * searchFocusout - handler for when a search input losses focus
   *  
   * @param  {event} event The focus out event
   */ 
  // var searchFocusout = function (event) {
  //   // event.relatedTarget gets the object that triggered the focusout event,
  //   // and if it's the submit submit button, ignore the focusout event.
  //   // Otherwise the submit function does not work.
  //   // Also ignore the event if it's the toggle button, since this already
  //   // has an open/close function attached to it.
  //   if(event.relatedTarget && (
  //       event.relatedTarget.getAttribute('type') == "submit" ||
  //       event.relatedTarget == searchButton
  //     )
  //   ){
  //     event.preventDefault();
  //   } else {
  //     d1Utilities.toggleElement(searchButton, search, true);
  //   }
  // }

  /**
   * toggleHeader - Show/hides the menu (if mobile)
   */ 
  block.toggleHeader = function(){
    if(!block.header || !d1Utilities.isMobile()){
      return
    }
    const currentScroll = window.pageYOffset;
    
    var currentScrollPos = window.pageYOffset;
    if (currentScroll == 0) {
      block.header.style.bottom = "0";
      return
    }
    if(currentScroll > lastScroll) {
      block.header.style.bottom = "-63px";
      d1Utilities.toggleElement(block.menuButton, block.menu, true);
    } else if ( currentScroll < lastScroll ) {
      block.header.style.bottom = "0";
    }
    lastScroll = currentScrollPos;
  }
  
  /**  
   * setListeners - Set the listeners for the navbar
   */   
  const setListeners = function(){
    
    // Make sure the aria labels are set to visible when the page is on desktop mode
    window.removeEventListener("load", function(e){if(!d1Utilities.isMobile()) {  d1Utilities.toggleElement(block.menuButton, block.menu, false)} }, false);
    window.addEventListener("load", function(e){if(!d1Utilities.isMobile()) {  d1Utilities.toggleElement(block.menuButton, block.menu, false)} }, false);
    
    // Hide the entire header on scroll down, show on scroll up. (on mobile)
    window.addEventListener("scroll", d1Utilities.throttle(block.toggleHeader, 100));
    
    // Show/hide the dropdown menus
    block.dropdownEls.forEach( els  => {
      
      // Mouse enter event (desktop version only)
      els.container.removeEventListener("mouseenter", function(){dropdownMouseenter(els)}, false);
      els.container.addEventListener("mouseenter", function(){ dropdownMouseenter(els)}, false);
      
      // Mouse leave event (desktop version only)
      els.container.removeEventListener("mouseleave", function(){dropdownMouseleave(els)}, false);
      els.container.addEventListener("mouseleave", function(){dropdownMouseleave(els)}, false);
      
      // Click event (mobile version only)
      els.container.removeEventListener("click", function(){dropdownClick(els)}, false);
      els.container.addEventListener("click", function(){dropdownClick(els)}, false);
      
    });

    // Show/hide the menu when the menu-toggle button is clicked
    if(block.menu !== null && block.menuButton !== null){
      block.menuButton.removeEventListener("click", menuButtonClick);
      block.menuButton.addEventListener("click", menuButtonClick);
    }

    // if(searchButton){
    //   // Show/hide the search when the search-toggle button is clicked, or if on the
    //   // homepage, scroll to the search at the top of the page and put it in focus.
    //   searchButton.removeEventListener("click", searchButtonClick);
    //   searchButton.addEventListener("click", searchButtonClick);
    // 
    //   // Close the search on focus out event.
    //   if(searchExists){
    //     search.removeEventListener("focusout", searchFocusout, true);
    //     search.addEventListener("focusout", searchFocusout, true);
    //   }
    // }
  }

}( window.{{ $bn }} = window.{{ $bn }} || {} ));
