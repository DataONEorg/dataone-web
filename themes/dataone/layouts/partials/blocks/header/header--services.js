/**
 * headerServices - Functions for the header block on the service summary page
 */ 
(function( headerServices, undefined ) {
  
  /**
   * isMobile - Determines whether the mobile or desktop version is being
   * displayed based on the window width.
   *  
   * @return {boolean}  true if mobile, false if desktop
   */ 
  const isMobile = function(){
    var mobileDesktopBreakpoint = {{ .Site.Params.mobileDesktopBreakpoint }} || 700;
    var winWidth = window.innerWidth || document.documentElement.clientWidth;
    if(winWidth < mobileDesktopBreakpoint){
      return true
    } else {
      return false
    }
  };
  
  /**    
   * addListener - Add an event listener that re-calculates the heights of the
   * elements when the window is resized. If the screen is mobile-sized,
   * removes the min-heights.
   *      
   * @param  {HTMLElements} els Elements to change when the screen is resized
   */     
  const addListener = function(els){
    window.addEventListener("resize", function(){
      if(isMobile()){
        removeHeightMins(els)
      } else {
        makeHeightsEven(els);
      }
    });
  }
  
  /**    
   * removeHeightMins - Remove minimum height styles set on a list of elements
   *      
   * @param  {HTMLElements} els Elements from which to remove minimum height property
   */     
  const removeHeightMins = function(els){
    for (let i = 0; i < els.length; i++) {
      els[i].style.minHeight = null;
    }
  }
  
  /**    
   * makeHeightsEven - Given a list of HTML elements, finds the height of the
   * tallest element and applies that height to all the elements as min-height
   *      
   * @param  {HTMLElements} els Elements to which height styles will be applied
   */     
  const makeHeightsEven = function(els){
    let maxHeight = 0;
    for (let i = 0; i < els.length; i++) {
      // First remove any minHeight property so that we can measure the
      // "natural" height of the element. Otherwise, elements may grow and
      // grow as the screen is resized.
      els[i].style.minHeight = null;
      let descHeight = els[i].offsetHeight;
      maxHeight = descHeight > maxHeight ? descHeight : maxHeight;
    }
    for (let i = 0; i < els.length; i++) {
      els[i].style.minHeight = maxHeight + "px";
    }
  }
  
  /**    
   * equalizeHeights - Selects elements and calls functions to apply minimum
   * heights to all of them, then event listeners to update those heights when
   * needed. This is a public function.
   *      
   * @param  {string} parentSelector A selector for the element that contains the elements that will be resized  
   * @param  {string} elsSelector    A selector for the children elements that will be resized
   */     
  headerServices.equalizeHeights = function(parentSelector, elsSelector){
    
    const parentEl = document.querySelector(parentSelector);
    if(parentEl){
      const els = parentEl.querySelectorAll(elsSelector);
      if(els){
        
        addListener(els);
        
        if(isMobile()){
          removeHeightMins(els);
          return
        } else {
          makeHeightsEven(els);
        }
        
      }
    }
  }
    
}( window.headerServices = window.headerServices || {} ));

headerServices.equalizeHeights(".header--services", ".page-summary__description");
headerServices.equalizeHeights(".header--services", ".page-summary__feature-list");
headerServices.equalizeHeights(".header--services", ".page-summary__header");
