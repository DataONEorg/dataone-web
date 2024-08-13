{{- $site := . -}}
{{- $p := $site.Params.prefix -}}
{{- $bn := print $p "toc" -}}

/**
 * {{ $bn }} - Functions for the Table Of Contents functionality
 */ 
(function( {{ $bn }}, undefined ) {
  
    var block = {{ $bn }};

    // --- CSS Selector strings --- //
    const 
          // The entire block (including TOC & content)
          selAll = ".{{ $bn }}",
          // The table of contents
          selTOC = ".{{ $bn }}__toc",
          // The contents that the TOC referrs to (i.e. the text with ids)
          selTOCTarget = ".{{ $bn }}__content",
          // The element that doesn't get affixed but that contains the TOC
          selTOCContainer = ".{{ $bn }}__toc-container"
          
  // The following selectors should be relative to the selTOC selector
          
          // The <ul> or <ol> elements that makes up the TOC
          selList = "ul, ol",
          // The buttons used to open/close the TOC on small screens
          selButton = ".{{ $bn }}__button",
          // The <li> elements within the TOC. <li> must contain an <a>.
          selItems = "li",
          // The nav element that surrounds the TOC
          selNav = "nav",
          
          
    // Classes to add/remove (provide without the ".")
    
          classAffixedMobile = "{{ $bn }}__toc--affixed-mobile",
          classAffixedDesktop = "{{ $bn }}__toc--affixed-desktop",
          classActive = "active",
          
    // The screen size at which to define "desktop" vs "mobile"
          mobileDesktopBreakpoint = {{- $site.Params.mobileDesktopBreakpoint -}} || 700;

    /**    
     * initialize - Functions to run once the HTML elements are loaded.
     * Select all of the TOC elements and set listeners.
     */
    block.initialize = function() {
      
      selectElements();
      // Only continue if the required elements exist
      if (block.tocExists) {
        // Set a minimum height for the nav container to keep it from
        // glitching on mobile
        setTimeout(function () {
          block.tocContainer.style.minHeight = (block.toc.offsetHeight + 2) + "px";
        }, 500);
        // Start the list as hidden (for mobile)
        block.list.setAttribute("aria-hidden", "false");
        // Add a link to identify the toc links
        setListeners();
      }
    }
    
    /**    
     * selectElements - Select all of the elements that this script will
     * manipulate. Make the items public by saving to the block object.
     */     
    const selectElements = function(){
      // Select the TOC items
      block.el = document.querySelector(selAll);
      block.toc = document.querySelector(selTOC);
      block.content = document.querySelector(selTOCTarget);
      
      if( block.el ){
        block.tocContainer = block.el.querySelector(selTOCContainer);
      }
      
      if( block.toc ){
        
        block.list = block.toc.querySelector(selList);
        block.button = block.toc.querySelector(selButton);
        block.nav = block.toc.querySelector(selNav);
        
        block.items = [];
        
        block.toc.querySelectorAll(selItems).forEach(function(item, index){
          
          var link = item.querySelector("a");
          // Don't count items without links
          if(link){
            var   href = link.getAttribute("href"),
                  targetSelector = href.substring(href.lastIndexOf("#") + 1),
                  id = "item__" + targetSelector,
                  lastChild = item.querySelector("ol li:last-child, ul li:last-child");
            
            item.setAttribute("id", id);
            
            block.items[index] = {
              index: index,
              el: item,
              href: href,
              id: id,
              targetIdSelector: targetSelector,
              hrefDestEl: document.querySelector("#" + targetSelector),
              lastChild: lastChild
            }
          }
        })
        
        // Ensure the necessary TOC elements exist in the page
        block.tocExists = block.button !== null && block.list !== null;
      }
    }
    
    /**    
     * setListeners - set the event listeners that will trigger scrollspy
     * behaviour, opening and closing the TOC, etc.  
     */     
    const setListeners = function(){
      
      // Scroll and resize events
      window.removeEventListener("scroll", d1Utilities.throttle(block.classChangeEvents, 20), false);
    	window.addEventListener("scroll", d1Utilities.throttle(block.classChangeEvents, 20), false);
      window.removeEventListener("resize", d1Utilities.throttle(block.classChangeEvents, 20), false);
      window.addEventListener("resize", d1Utilities.throttle(block.classChangeEvents, 20), false);
      
      // If on mobile, and menu is affixed, then close menu on item click
      block.items.forEach(item => {
        item.el.addEventListener('click', function() {
          var winWidth = window.innerWidth || document.documentElement.clientWidth;
          if(
            (winWidth < mobileDesktopBreakpoint) &&
            block.toc.classList.contains(classAffixedMobile)
          ){
            toggleTOC(true);
          }
        });
      });
      
      // Show/hide the TOC when the button is clicked (on mobile)
      block.button.addEventListener("click", function () {
        if(block.tocExists){
          var open = JSON.parse(block.button.getAttribute("aria-expanded"));
          toggleTOC(open);
        }
      });
    }
    
    /**    
     * Event handler for scroll and & window resize. Updates the TOC.
     */     
    block.classChangeEvents = function(){
      
      // Check if menu is changing from not affixed to affixed on mobile
      var isAffixedBefore = block.toc.classList.contains(classAffixedMobile);
      
      // Affix TOC on scroll MOBILE
      elementFromTop(
        elemTrigger          = [block.el],
        targetElSelector     = selTOC,
        classToAdd           = classAffixedMobile,
        distanceFromTop      = -(block.toc.offsetHeight - 100),
        unit                 = 'pixels',
        offset               =  (block.toc.offsetHeight - 100)
      );
      
      // If menu changed from not affixed to affixed on mobile, minimize TOC
      var isAffixedAfter = block.toc.classList.contains(classAffixedMobile);
      if(!isAffixedBefore && isAffixedAfter){
        toggleTOC(true);
      }
      
      // Affix TOC on scroll (affix soooner if on DESKTOP)
      elementFromTop(
        elemTrigger     = [block.el],
        targetElSelector   = selTOC,
        classToAdd      = classAffixedDesktop,
        distanceFromTop = 0,
        unit            = 'pixels',
        offset          = block.toc.offsetHeight
      );
      
      // Scrollspy - activate menu link when corresponding section comes into view.
      block.items.forEach(function(item, index){
        // Get the position of the next element to calculate the offset
        var nextItem = block.items[ index + 1 ];
        var offset;
        
        // Keep parent active when child elements are active
        if(item.lastChild && item.lastChild != null){
          var lastChildObj = block.items.find( searchItem => searchItem.id == item.lastChild.id ),
              nextItem = block.items[ lastChildObj.index + 1 ];
        }
        // Otherwise, keep active until the next item becomes active
        if(nextItem){
          offset = (nextItem.hrefDestEl.getBoundingClientRect().top - item.hrefDestEl.getBoundingClientRect().top) - item.hrefDestEl.offsetHeight ;
        // Otherwise, stay active until the end of the entire block
        } else {
          offset = (block.el.getBoundingClientRect().bottom - item.hrefDestEl.getBoundingClientRect().top);
        }
        
        elementFromTop(
          elemTrigger     = [item.hrefDestEl],
          targetElSelector   = "#" + item.id,
          classToAdd      = classActive,
          distanceFromTop = 159,
          unit            = 'pixels',
          offset          = ((offset - 160) * (-1))
        );
      
      });
      
      // If on desktop, make sure that all of TOC is shown.
      // Also make sure it's shown when it's not affixed on Mobile
      var winWidth = window.innerWidth || document.documentElement.clientWidth;
      if( winWidth >= mobileDesktopBreakpoint || (!block.toc.classList.contains(classAffixedMobile)) ){
        toggleTOC(false);
      }
      
    }

    /**
     * toggleTOC - Sets or unsets the aria-expanded and aria-hidden attributes on
     * the TOCmenu and tocMenu button.
     * @param {boolean} open - indicates whether the menu should be closed (true) or
     * open (false).
     */
    const toggleTOC = function(open) {
      
      try {
        if (block.tocExists) {
          block.button.setAttribute("aria-expanded", !open);
          block.list.setAttribute("aria-hidden", open);
        }
      } catch (e) {
        console.log("Error toggling the TOC");
        console.log(e);
      }
    };

    /**  
     * elementFromTop - Adds or removes a class to an element based on its position
     * in the view window.
     *    
     * @param  {HTMLElement} elemTrigger     The HTML element which will trigger adding/removing a class when in view.  
     * @param  {string} targetElSelector        The class used to identify the target element(s)
     * @param  {string} classToAdd           The class to add or remove to the target element(s)
     * @param  {number} distanceFromTop      How far past the top of the view port should the top of element be before the class is added? (in pixels or % of element height)
     * @param  {string} unit                 ('percent' or 'pixels')
     * @param  {number} offset               If set to 0, the class will be removed once the users scrolls past the bottom of the element. If a + number, the class will be removed sooner. If a - number, the class will be removed later.  
     */
    function elementFromTop(elemTrigger, targetElSelector, classToAdd, distanceFromTop, unit, offset) {
      
      var winY = window.innerHeight || document.documentElement.clientHeight,
        elTriggerLength = elemTrigger.length,
        elTargetLength, distTop, distPercent, distPixels, distUnit, elTarget, i, j;
        
      for (i = 0; i < elTriggerLength; ++i) {
        
        elTarget = document.querySelectorAll(targetElSelector);
        elTargetLength = elTarget.length;
        distTop = elemTrigger[i].getBoundingClientRect().top;
        distBottom = elemTrigger[i].getBoundingClientRect().bottom;
        distPercent = Math.round((distTop / winY) * 100);
        distPixels = Math.round(distTop);
        distUnit = unit == 'percent' ? distPercent : distPixels;
        
        if (!offset) {
          var offset = 0;
        }
        // If trigger in view, then
        if (distUnit <= distanceFromTop && (distBottom - offset) >= 0) {
          // For each of the targets
          for (j = 0; j < elTargetLength; ++j) {
            // If the doesn't already contain the active class
            if (!elTarget[j].classList.contains(classToAdd)) {
              // Add it
              elTarget[j].classList.add(classToAdd);
            }
          }
        // If not in view
        } else {
          // Then remove the classes
          elemTrigger[i].classList.remove(classToAdd);
          for (j = 0; j < elTargetLength; ++j) {
            elTarget[j].classList.remove(classToAdd);
          }
        }
      }
    }
    
    block.initialize();

}( window.{{ $bn }} = window.{{ $bn }} || {} ));
