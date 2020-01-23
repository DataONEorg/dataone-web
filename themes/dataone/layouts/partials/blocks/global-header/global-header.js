// The menu button, menu, search button, search form, and global-header
var menuButton    = document.getElementById("primary-menu-toggle"),
    searchButton  = document.getElementById("search-toggle"),
    search        = document.getElementById("nav-search-bar"),
    searchInput   = document.getElementById("search-term"),
    menu          = document.getElementById("primary-menu"),
    header        = document.getElementById("global-header"),
    searchExists  = search !== null && searchButton !== null,
    menuExists    = menu !==null && menuButton !== null;
      

/**
 * toggleMenu - Sets or unsets the aria-expanded and aria-hidden attributes on
 * the menu and menu button.
 * @param {boolean} open - indicates whether the menu should be closed (true) or
 * open (false).
 */
var toggleMenu = function(open){
  try{
    if(menuExists){
      menuButton.setAttribute("aria-expanded", !open);
      menu.setAttribute("aria-hidden", open);
    }
  } catch(e) {
    console.log("Error toggling the menu");
    console.log(e);
  }
};

/**
 * toggleSearch - Sets or unsets the aria-expanded and aria-hidden attributes on
 * the search and search button.
 * @param {boolean} open - indicates whether the search should be closed (true)
 * or open (false).
 */
var toggleSearch = function(open){
  try{
    if(searchExists){
      searchButton.setAttribute("aria-expanded", !open);
      search.setAttribute("aria-hidden", open);
    }
  } catch(e) {
    console.log("Error toggling the search");
    console.log(e);
  }
};

// Show/hide the menu when the menu-toggle button is clicked
if(menuExists){
  menuButton.addEventListener("click", function () {
    const open = JSON.parse(menuButton.getAttribute("aria-expanded"));
    toggleMenu(open);
    // Menu and search shouldn't be open at the same time.
    toggleSearch(true);
  });
}

if(searchButton){
  
  // Show/hide the search when the search-toggle button is clicked, or if on the
  // homepage, scroll to the search at the top of the page and put it in focus.
  searchButton.addEventListener("click", function () {
    if(searchExists){
      const open = JSON.parse(searchButton.getAttribute("aria-expanded"));
      toggleSearch(open);
      if(!open && searchInput){
        searchInput.focus();
      };
    } else {
      // We don't put the search bar in the nav when on the homepage,
      // since the homepage has it's own search bar. Scroll to homepage
      // search in this case.
      if(searchInput){
        searchInput.scrollIntoView({ behavior: "smooth", block:'center' });
        searchInput.focus();
      }
    }
    // Menu and search shouldn't be open at the same time.
    toggleMenu(true);
  });
  
  // Close the search on focus out event.
  if(searchExists){
    search.addEventListener("focusout", function (event) {
      // event.relatedTarget gets the object that triggered the focusout event,
      // and if it's the submit submit button, ignore the focusout event.
      // Otherwise the sucmit function does not work.
      if(event.relatedTarget && event.relatedTarget.getAttribute('type') == "submit"){
        event.preventDefault();
      } else {
        toggleSearch(true);
      }
    });
  }
  
}



// Hide the entire header on scroll down, show on scroll up. (on mobile)
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.bottom = "0";
  } else {
    header.style.bottom = "-63px";
    // make sure the menu and the search are closed
    toggleSearch(true);
    toggleMenu(true);
  }
  prevScrollpos = currentScrollPos;
}
