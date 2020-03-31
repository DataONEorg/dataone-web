
// =================== ELEMENTS & VARS ==================== //
 
// The menu button, menu, search button, search form, and global-header
var menuButton    = document.getElementById("global-menu-toggle"),
    menu          = document.getElementById("global-menu"),
    
    searchButton  = document.getElementById("search-toggle"),
    search        = document.getElementById("nav-search-bar"),
    searchInput   = document.getElementById("search-term"),

    header        = document.getElementById("global-header"),
    
    searchExists  = search !== null && searchButton !== null,
    menuExists    = menu !== null && menuButton !== null,
    
    dropdownContainers = document.querySelectorAll(".menu-item--dropdown"),
    dropdownEls = [];

    // Get the dropdown buttons with corresponding submenus
    dropdownContainers.forEach((container, i) => {
      dropdownEls[i] = {}
      dropdownEls[i].container = container;
      dropdownEls[i].button    = container.querySelector("button");
      dropdownEls[i].submenu   = container.querySelector(".menu-item__sub-menu");
    });
    
    var closeDropdownTimeout;
  

// =================== FUNCTIONS ==================== //


/**
 * var closeAllDropdowns - Closes all the submenus
 */ 
var closeAllDropdowns = function(){
  if(dropdownEls){
    dropdownEls.forEach( els  => {
      toggleElement(els.button, els.submenu, true);
    });
  }
  
};

/**  
 * stopCloseTimeout - Helps time when the menu should close
 */
var startCloseTimeout = function (){
  closeDropdownTimeout = setTimeout( () => closeAllDropdowns() , 70 );
}; 

/**  
 * stopCloseTimeout - Helps time when the menu should close
 */
var stopCloseTimeout   = function () {
  clearTimeout( closeDropdownTimeout );
};

/**
 * var isMobile - Determines whether the mobile or desktop version is being
 * displayed based on the window width.
 *  
 * @return {boolean}  true if mobile, false if desktop
 */ 
var isMobile = function(){
  var winWidth = window.innerWidth || document.documentElement.clientWidth;
  if(winWidth < mobileDesktopBreakpoint){
    return true
  } else {
    return false
  }
};

/**
 * var dropdownMouseenter - Handler function for when the mouse enters
 * the dropdown menu container
 */ 
var dropdownMouseenter = function(els){
  if(!isMobile()){
    stopCloseTimeout();
    // ensure other dropdowns are closed
    closeAllDropdowns();
    // open the corresponding submenu
    toggleElement(els.button, els.submenu, false );
  }
}

/**
 * var dropdownMouseleave - Handler function for when the mouse leaves
 * the dropdown menu container
 */ 
var dropdownMouseleave = function(){
  if(!isMobile()){
    startCloseTimeout()
  }
};

/**
 * var dropdownClick - Handler function for when a dropdown menu container is
 * clicked.
 */ 
var dropdownClick = function(els){
  if(isMobile()){
    // check if opened or closed currently
    var open = JSON.parse(els.button.getAttribute("aria-expanded"));
    // ensure other dropdowns are closed
    closeAllDropdowns();
    // toggle the corresponding submenu
    toggleElement(els.button, els.submenu, open);
  }
};

/**
 * menuButtonClick - Handler function for when a menu button is
 * clicked.
 */ 
var menuButtonClick = function () {
  if(isMobile()){
    var open = JSON.parse(menuButton.getAttribute("aria-expanded"));
    toggleElement(menuButton, menu, open);
    // Menu and search shouldn't be open at the same time.
    toggleElement(searchButton, search, true);
    // Close all the dropdowns on menu close or open
    closeAllDropdowns();
  }
};


/**
 * searchButtonClick - Handler function for when a search button is
 * clicked.
 */ 
var searchButtonClick = function () {
  if(searchExists){
    var open = JSON.parse(searchButton.getAttribute("aria-expanded"));
    toggleElement(searchButton, search, open);
    // TODO: this only works on chrome. On safari/firefox, causes menu to stay open
    // if((!open) && searchInput){
    //   searchInput.focus();
    // };
    if(isMobile()){
      toggleElement(menuButton, menu, true);
    }
  } else {
    // We don't put the search bar in the nav when on the homepage,
    // since the homepage has it's own search bar. Scroll to homepage
    // search in this case.
    if(searchInput){
      searchInput.scrollIntoView({ behavior: "smooth", block:'center' });
      searchInput.focus();
      if(isMobile()){
        toggleElement(menuButton, menu, true);
      }
    }
  }
  
};


/**
 * searchFocusout - handler for when a search input losses focus
 *  
 * @param  {event} event The focus out event
 */ 
var searchFocusout = function (event) {
  // event.relatedTarget gets the object that triggered the focusout event,
  // and if it's the submit submit button, ignore the focusout event.
  // Otherwise the submit function does not work.
  // Also ignore the event if it's the toggle button, since this already
  // has an open/close function attached to it.
  if(event.relatedTarget && (
      event.relatedTarget.getAttribute('type') == "submit" ||
      event.relatedTarget == searchButton
    )
  ){
    event.preventDefault();
  } else {
    toggleElement(searchButton, search, true);
  }
}

/**
 * var toggleHeader - Show/hides the menu (if mobile)
 */ 
var prevScrollpos = window.pageYOffset;

var toggleHeader = function(){
  if(isMobile()){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.bottom = "0";
    } else {
      header.style.bottom = "-63px";
      // make sure the menu and the search are closed
      toggleElement(searchButton, search,true);
      toggleElement(menuButton, menu, true);
    }
    prevScrollpos = currentScrollPos;
  }
}

// =================== LISTENERS ==================== //

// Show/hide the dropdown menus
dropdownEls.forEach( els  => {
  
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
if(menuExists){
  menuButton.removeEventListener("click", menuButtonClick);
  menuButton.addEventListener("click", menuButtonClick);
}

if(searchButton){
  // Show/hide the search when the search-toggle button is clicked, or if on the
  // homepage, scroll to the search at the top of the page and put it in focus.
  searchButton.removeEventListener("click", searchButtonClick);
  searchButton.addEventListener("click", searchButtonClick);
  
  // Close the search on focus out event.
  if(searchExists){
    search.removeEventListener("focusout", searchFocusout, true);
    search.addEventListener("focusout", searchFocusout, true);
  }
}

// Hide the entire header on scroll down, show on scroll up. (on mobile)
window.removeEventListener("scroll", throttle(toggleHeader, 20), false);
window.addEventListener("scroll", throttle(toggleHeader, 20), false);

// Make sure the aria labels are set to visible when the page is on desktop mode
window.removeEventListener("load", function(){
  if(!isMobile()) {  toggleElement(menuButton, menu, false)  }
});
window.addEventListener("load", function(){
  if(!isMobile()) {  toggleElement(menuButton, menu, false)  }
});
