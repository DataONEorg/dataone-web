/**
 * logosBar - Slider functions for the logos bar
 */ 
(function( logosBar, undefined ) {

    /**    
     * easeInOutQuad - An easing function
     *      
     * @param  {number} t current time
     * @param  {number} b start value
     * @param  {number} c change in value   
     * @param  {number} d duration
     * @return {number}   The y-value of the easing function at the given parameters    
     */     
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
    	if (t < 1) return c/2*t*t + b;
    	t--;
    	return -c/2 * (t*(t-2) - 1) + b;
    };
    
    /**    
     * scrollTo - Gradually changes the left scroll position of an element using
     * the easeInOutQuad easing function
     *      
     * @param  {HTMLElement}  element   The element for which to set a left scoll position
     * @param  {number}       to        The final scoll position     
     * @param  {number}       duration  The time in ms it should take to get to the final scroll position
     */     
    const scrollTo = function(element, to, duration) {
        let start = element.scrollLeft,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        const animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if(currentTime < duration) {
              setTimeout(animateScroll, increment);
            }
        };
        
        animateScroll();
    }

  /**  
   * scrollEls - scoll a container of multiple elements with a snap-scoll like effect
   *    
   * @param  {string} parentID A selector for the parent element to set a scoll position for.
   * The children of the parent will be used to set the scoll position incrementally.
   * @param  {string} direction "prev" for left/backwards and "next" for right/forwards
   */   
  logosBar.scrollEls = function(parentID, direction){
    const parent = document.querySelector(parentID);
    if(parent){
      const els = parent.children;
      
      if(els){
        
        // Width of the scroll box is the starting point for the width to scroll
        if(!direction || ( direction != "prev" && direction != "next")){
          direction = "next";
        }
        let maxScrollAmount = direction === "next" ? parent.scrollLeft + parent.clientWidth : parent.scrollLeft - parent.clientWidth;
        
        // Make an array of positions for the child elements.
        // Add parent.scrollLeft value so that the positions are where the
        // elements would be if the scroll box were at 0.
        let elPositions = [];
        for (let i = 0; i < els.length; i++) {
          elPositions.push(
            els[i].getBoundingClientRect().left + parent.scrollLeft
          );
        }
        // Find the index of the first number in the array that is greater than
        // the new scroll position
        let j = elPositions.findIndex(function(number) {
          return number > maxScrollAmount;
        });
        
        var offset = elPositions[0];
        
        // Change the scroll amount to the last element that is less than the
        // scroll amount
        // Minus padding
        let leftMostPos = elPositions[j - 1];
        let scrollAmount = maxScrollAmount;
        if(leftMostPos){
          scrollAmount = leftMostPos - offset;
          // For smaller screens
          if(direction == "next" && scrollAmount <= (parent.scrollLeft + 199)){
            scrollAmount = parent.scrollLeft + 200;
          }
          if(direction == "prev" && scrollAmount >= (parent.scrollLeft - 199)){
            scrollAmount = parent.scrollLeft - 200;
          }
        }
        
        scrollTo(parent, scrollAmount, 600);
        
      }
    }
  }
  

}( window.logosBar = window.logosBar || {} ));
