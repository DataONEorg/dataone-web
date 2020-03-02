/**
 * toggleCalendarMenu - Show/hide the add to calendar options
 * @param  {HTMLElement} button The "add to calendar" button
 * 
 */ 
var toggleCalendarMenu = function(button) {
  if(button){
    var open = JSON.parse(button.getAttribute("aria-expanded"));
    // get the input calendar menu, a sibling of the button
    menuEl = button.parentNode.querySelector("#calendar-menu");
    toggleElement(button, menuEl, open);
  }
};
