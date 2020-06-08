/**
 * headerServices - Functions for the header block on the service summary page
 */ 
(function( headerServices, undefined ) {
  
  const headerSelector = ".header--services";
  const headerEl = document.querySelector(headerSelector);
  
  if(headerEl){
    const descSelector = ".page-summary__description";
    const descEls = document.querySelectorAll(descSelector);
    
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
     * makeHeightsEven - Given a list of HTML elements, finds the height of the
     * tallest element and applies that height to all the elements as min-height
     *      
     * @param  {HTMLElements} els a list of html elements to which height styles will be applied
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
    
    window.addEventListener("resize", function(){
      if(isMobile()){
        for (let i = 0; i < descEls.length; i++) {
          descEls[i].style.minHeight = null;
        }
      } else {
        makeHeightsEven(descEls);
      }
    });
    
    makeHeightsEven(descEls);
    
    
  }
  

}( window.headerServices = window.headerServices || {} ));
