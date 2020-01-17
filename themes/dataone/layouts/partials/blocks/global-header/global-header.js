// The menu button, menu, and global-header
const toggleMenu = document.querySelector("#primary-menu-toggle"),
      menu = document.querySelector("#primary-menu"),
      header = document.querySelector("#global-header");

// Show/hide the menu when the menu-toggle button is clicked
toggleMenu.addEventListener("click", function () {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  toggleMenu.setAttribute("aria-expanded", !open);
  menu.setAttribute("aria-hidden", open);
});

// Hide the entire header on scroll down, show on scroll up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.bottom = "0";
  } else {
    header.style.bottom = "-63px";
    toggleMenu.setAttribute("aria-expanded", false);
    menu.setAttribute("aria-hidden", true);
  }
  prevScrollpos = currentScrollPos;
}
