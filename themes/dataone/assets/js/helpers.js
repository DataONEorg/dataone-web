// Helper functions

/**
 * var toggleElement - Add or remove aria-expanded or aria-hidden on a button
 * and element (e.g. menu) respectivly.
 *  
 * @param  {HTMLElement} button  The button that toggles the element
 * @param  {HTMLElement} element The element to show/hide with aria attributes
 * @param {boolean} open - indicates whether the element should be closed (true)
 * or open (false)
 */ 
var toggleElement = function(button, element, open){
  try{
    if(element !== null && button !== null){
      button.setAttribute("aria-expanded", !open);
      element.setAttribute("aria-hidden", open);
    }
  } catch(e) {
    console.log("Error toggling the search");
    console.log(e);
  }
};

/**  
 * throttle - Limits the number of times that a function can be called within a time period. 
 * From: https://www.afasterweb.com/2017/09/26/performance-basics-throttling/
 *    
 * @param  {function} callback The function to throttle  
 * @param  {number}   limit    Minimum milliseconds to wait before allowing the callback function to be called again 
 * @return {function} Returns the callback function wrapped in the throttle function 
 */   
var throttle = function (callback, limit) {
  var tick = false;
  return function () {
    if (!tick) {
      callback.call();
      tick = true;
      setTimeout(function () {
        tick = false;
      }, limit);
    }
  }
};


/**
 * var getMaxHeight - Find the largest height from a set of elements
 *  
 * @param  {type} elements The set of elements to check
 * @return {number}        The height of the tallest element in pixels
 */ 
var getMaxHeight = function(elements){
  console.log(elements);
  console.log(typeof elements );
  var maxHeight = 0;
  for (i = 0; i < elements.length; ++i) {    
    var el, hidden, height;
    el = elements[i];
    // Check whether it's hidden by default or not
    hidden = el.getAttribute("aria-hidden");
    // If it's hidden, unhide it for a moment to get it's height
    if(hidden){
      el.setAttribute("aria-hidden", false);
    }
    // measure the height
    height = el.offsetHeight;
    // Re-hide the element if it was previously hidden
    if(hidden){
      el.setAttribute("aria-hidden", true);
    }
    // If it's greater than maxHeight, update the variable
    maxHeight = height > maxHeight ? height : maxHeight;
  }
  return maxHeight
}
