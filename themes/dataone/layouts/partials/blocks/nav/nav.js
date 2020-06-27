{{- $site := . -}}
{{- $p := $site.Params.prefix -}}
{{- $bn := print $p "globalHeader" -}}
/**
 * {{ $bn }} - Slider functions for the logos bar
 */ 
(function( {{ $bn }}, undefined ) {
  
  {{ $bn }}.initialize = function(){
    
    {{ $bn }}.lastScroll = 0;
    
    // The menu button, menu, search button, search form, and nav
    {{ $bn }}.menuButton    = document.getElementById("global-menu-toggle");
    {{ $bn }}.menu          = document.getElementById("global-menu");
    {{ $bn }}.header        = document.getElementById("nav");
    {{ $bn }}.menuExists    = {{ $bn }}.menu !== null && {{ $bn }}.menuButton !== null;
    
    var dropdownContainers = document.querySelectorAll(".{{ $p }}menu-item--dropdown");
    {{ $bn }}.dropdownEls = [];

    // Get the dropdown buttons with corresponding submenus
    dropdownContainers.forEach((container, i) => {
      {{ $bn }}.dropdownEls[i] = {}
      {{ $bn }}.dropdownEls[i].container = container;
      {{ $bn }}.dropdownEls[i].button    = container.querySelector("button");
      {{ $bn }}.dropdownEls[i].submenu   = container.querySelector(".{{ $p }}menu-item__sub-menu");
    });
    
    // var searchButton  = document.getElementById("search-toggle"),
    //     search        = document.getElementById("nav-search-bar"),
    //     searchInput   = document.getElementById("search-term"),
    // searchExists  = search !== null && searchButton !== null,
        
    {{ $bn }}.closeDropdownTimeout = 0;
    
    setListeners();
  }
  
  /**
   * var closeAllDropdowns - Closes all the submenus
   */ 
  var closeAllDropdowns = function(){
    if({{ $bn }}.dropdownEls){
      {{ $bn }}.dropdownEls.forEach( els  => {
        d1Utilities.toggleElement(els.button, els.submenu, true);
      });
    }
    
  };

  /**  
   * stopCloseTimeout - Helps time when the menu should close
   */
  var startCloseTimeout = function (){
    {{ $bn }}.closeDropdownTimeout = setTimeout( () => closeAllDropdowns() , 70 );
  }; 

  /**  
   * stopCloseTimeout - Helps time when the menu should close
   */
  var stopCloseTimeout   = function () {
    clearTimeout( {{ $bn }}.closeDropdownTimeout );
  };

  /**
   * var dropdownMouseenter - Handler function for when the mouse enters
   * the dropdown menu container
   */ 
  var dropdownMouseenter = function(els){
    if(!d1Utilities.isMobile()){
      stopCloseTimeout();
      // ensure other dropdowns are closed
      closeAllDropdowns();
      // open the corresponding submenu
      d1Utilities.toggleElement(els.button, els.submenu, false );
    }
  }

  /**
   * var dropdownMouseleave - Handler function for when the mouse leaves
   * the dropdown menu container
   */ 
  var dropdownMouseleave = function(){
    if(!d1Utilities.isMobile()){
      startCloseTimeout()
    }
  };

  /**
   * var dropdownClick - Handler function for when a dropdown menu container is
   * clicked.
   */ 
  var dropdownClick = function(els){
    if(d1Utilities.isMobile()){
      // check if opened or closed currently
      var open = JSON.parse(els.button.getAttribute("aria-expanded"));
      // ensure other dropdowns are closed
      closeAllDropdowns();
      // toggle the corresponding submenu
      d1Utilities.toggleElement(els.button, els.submenu, open);
    }
  };

  /**
   * menuButtonClick - Handler function for when a menu button is
   * clicked.
   */ 
  menuButtonClick = function () {
    if(d1Utilities.isMobile()){
      var open = JSON.parse({{ $bn }}.menuButton.getAttribute("aria-expanded"));
      d1Utilities.toggleElement({{ $bn }}.menuButton, {{ $bn }}.menu, open);
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
  //       d1Utilities.toggleElement({{ $bn }}.menuButton, {{ $bn }}.menu, true);
  //     }
  //   } else {
  //     // We don't put the search bar in the nav when on the homepage,
  //     // since the homepage has it's own search bar. Scroll to homepage
  //     // search in this case.
  //     if(searchInput){
  //       searchInput.scrollIntoView({ behavior: "smooth", block:'center' });
  //       searchInput.focus();
  //       if(d1Utilities.isMobile()){
  //         d1Utilities.toggleElement({{ $bn }}.menuButton, {{ $bn }}.menu, true);
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
   * var toggleHeader - Show/hides the menu (if mobile)
   */ 
  {{ $bn }}.toggleHeader = function(){
    if(!{{ $bn }}.header || !d1Utilities.isMobile()){
      return
    }
    const currentScroll = window.pageYOffset;
    
    var currentScrollPos = window.pageYOffset;
    if (currentScroll == 0) {
      {{ $bn }}.header.style.bottom = "0";
      return
    }
    if(currentScroll > {{ $bn }}.lastScroll) {
      {{ $bn }}.header.style.bottom = "-63px";
      d1Utilities.toggleElement({{ $bn }}.menuButton, {{ $bn }}.menu, true);
    } else if ( currentScroll < {{ $bn }}.lastScroll ) {
      {{ $bn }}.header.style.bottom = "0";
    }
    {{ $bn }}.lastScroll = currentScrollPos;
  }
  
  /**  
   * setListeners - Set the listeners for the navbar
   */   
  const setListeners = function(){
    // Make sure the aria labels are set to visible when the page is on desktop mode
    window.removeEventListener("load", function(e){if(!d1Utilities.isMobile()) {  d1Utilities.toggleElement({{ $bn }}.menuButton, {{ $bn }}.menu, false)} }, false);
    window.addEventListener("load", function(e){if(!d1Utilities.isMobile()) {  d1Utilities.toggleElement({{ $bn }}.menuButton, {{ $bn }}.menu, false)} }, false);
    
    // Hide the entire header on scroll down, show on scroll up. (on mobile)
    window.addEventListener("scroll", d1Utilities.throttle({{ $bn }}.toggleHeader, 100));
    
    // Show/hide the dropdown menus
    {{ $bn }}.dropdownEls.forEach( els  => {
      
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
    if({{ $bn }}.menuExists){
      {{ $bn }}.menuButton.removeEventListener("click", menuButtonClick);
      {{ $bn }}.menuButton.addEventListener("click", menuButtonClick);
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
