/**
 * d1Utilities - Helper functions used in various blocks
 */ 
(function( d1Utilities, undefined ) {
  
  const block = d1Utilities;

  /**
   * var toggleElement - Add or remove aria-expanded or aria-hidden on a button
   * and element (e.g. menu) respectivly.
   *  
   * @param  {HTMLElement} button  The button that toggles the element
   * @param  {HTMLElement} element The element to show/hide with aria attributes
   * @param {boolean} open - indicates whether the element should be closed (true)
   * or open (false)
   */ 
  block.toggleElement = function(button, element, open){
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
   * @param  {function} fn The function to throttle  
   * @param  {number}   wait    Minimum milliseconds to wait before allowing the callback function to be called again 
   * @return {function} Returns the callback function wrapped in the throttle function 
   */   
  block.throttle = function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  };
  
  /**
   * isMobile - Determines whether the mobile or desktop version is being
   * displayed based on the window width.
   *  
   * @return {boolean}  true if mobile, false if desktop
   */ 
  block.isMobile = function(){
    var mobileDesktopBreakpoint = {{- .Params.mobileDesktopBreakpoint -}} || 700;
    var winWidth = window.innerWidth || document.documentElement.clientWidth;
    if(winWidth < mobileDesktopBreakpoint){
      return true
    } else {
      return false
    }
  };
  
  block.isSafari = function(){
    if(navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){
      return true
    }
    return false
  }

}( window.d1Utilities = window.d1Utilities || {} ));
