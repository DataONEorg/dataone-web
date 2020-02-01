// Toggle TOC menu with button (on mobile)
var tocButton    = document.getElementById("toc-toggle"),
    tocMenu      = document.getElementById("member-nodes-toc"),
    tocExists    = tocButton !==null && tocMenu !== null,
    sectionItems = document.querySelectorAll('.member-nodes__toc-item'),
    sectionLinks = document.querySelectorAll('.member-nodes__toc-item'),
    navEl        = document.querySelector(".member-nodes__nav");

/**
 * var updateTOC - function that opens or closes the menu when a button is clicked
 * (on mobile), and adds "active" class to relevant TOC section on scroll. 
 * based on: http://fofwebdesign.co.uk/template/_testing/scroll-in-view/add-class-to-element-when-in-view.htm
 */ 

var updateTOC = function(){
  
  /**
   * toggleTOC - Sets or unsets the aria-expanded and aria-hidden attributes on
   * the TOCmenu and tocMenu button.
   * @param {boolean} open - indicates whether the menu should be closed (true) or
   * open (false).
   */
  var toggleTOC = function(open){
    try{
      if(tocExists){
        tocButton.setAttribute("aria-expanded", !open);
        tocMenu.setAttribute("aria-hidden", open);
      }
    } catch(e) {
      console.log("Error toggling the TOC");
      console.log(e);
    }
  };

	/**  
	 * hasClass - Checks if an element contains a class name
	 *    
	 * @param  {HTMLElement} el  The target element to check
	 * @param  {string}      cls      The class to check for
	 * @return {boolean}  Returns true of the element has the class, and false otherwise.  
	 */   
	function hasClass(el, cls) {
		if (el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { return true; } 
	}
  
	/**  
	 * addClass - Adds a class to an element
	 *    
	 * @param  {HTMLElement} el     The target element to which a class should be added
	 * @param  {string}      cls    The class to add
	 */   
	function addClass(el, cls) {
		if (!el.className.match('(?:^|\\s)'+cls+'(?!\\S)')) { el.className += ' '+cls; } 
	}
  
	/**  
	 * delClass - Removes  a class from an element
	 *    
	 * @param  {HTMLElement} el  The target element to which a class should be removed
	 * @param  {type}       cls  The class to remove
	 */   
	function delClass(el, cls) {
		el.className = el.className.replace(new RegExp('(?:^|\\s)'+cls+'(?!\\S)'),'');
	}

	/**  
	 * elementFromTop - Adds or removes a class to an element based on its position
   * in the view window.  
	 *    
	 * @param  {HTMLElement} elemTrigger     The HTML element which will trigger adding/removing a class when in view.  
	 * @param  {string} elemTarget           The class used to identify the target element(s)
   * @param  {string} classToAdd           The class to add or remove to the target element(s)
	 * @param  {number} distanceFromTop      How far past the top of the view port should the top of element be before the class is added? (in pixels or % of element height)
	 * @param  {string} unit                 ('percent' or 'pixels')
	 * @param  {number} offset               If set to 0, the class will be removed once the users scrolls past the bottom of the element. If a + number, the class will be removed sooner. If a - number, the class will be removed later.  
	 */   
	function elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit, offset) {
		var winY = window.innerHeight || document.documentElement.clientHeight, 
		    elTriggerLength = elemTrigger.length, 
		    elTargetLength, distTop, distPercent, distPixels, distUnit, elTarget, i, j;
		for (i = 0; i < elTriggerLength; ++i) {
			elTarget = document.querySelectorAll(elemTarget);
			elTargetLength = elTarget.length;
			distTop = elemTrigger[i].getBoundingClientRect().top;
      distBottom = elemTrigger[i].getBoundingClientRect().bottom;
			distPercent = Math.round((distTop / winY) * 100);
			distPixels = Math.round(distTop);
			distUnit = unit == 'percent' ? distPercent : distPixels;
      if(!offset){
        var offset = 0;
      }
      // If in view, then
			if (distUnit <= distanceFromTop && (distBottom - offset) >= 0 ) {
				if (!hasClass(elemTrigger[i], elemTarget)) {
					for (j = 0; j < elTargetLength; ++j) {
						if (!hasClass(elTarget[j], classToAdd)) {
              addClass(elTarget[j], classToAdd);
            }
					}
				} else {
          if(!hasClass(elemTrigger[i], classToAdd)) {
            addClass(elemTrigger[i], classToAdd);
          }
				}
      // If not in view
			} else {
				delClass(elemTrigger[i], classToAdd);
				if (!hasClass(elemTrigger[i], elemTarget)) {
					for (j = 0; j < elTargetLength; ++j) { delClass(elTarget[j], classToAdd); }
					}
				}
			}
		}    

  /**  
   * var classChangeEvents - All of the functions that should run when the user
   * scrolls or resizes their window
   */   
  var classChangeEvents = function(){
    
    // check if menu is changing from not affixed to affixed on mobile
    var isAffixedBefore = hasClass(navEl, "member-nodes__nav--mobile-affixed");
    
    // Affix TOC on scroll
    elementFromTop(
      elemTrigger     = document.querySelectorAll('.member-nodes'),
      elemTarget      = '.member-nodes__nav',
      classToAdd      = 'member-nodes__nav--mobile-affixed',
      distanceFromTop = -document.querySelector('.member-nodes__nav').offsetHeight,
      unit            = 'pixels',
      offset          = (document.querySelector('.member-nodes__nav').offsetHeight - 100)
    );
    
    // if menu changed from not affixed to affixed on mobile, minimize TOC
    var isAffixedAfter = hasClass(navEl, "member-nodes__nav--mobile-affixed");
    if(!isAffixedBefore && isAffixedAfter){
      toggleTOC(true);
    }
    
    
    // Affix TOC on scroll (affix soooner if on desktop)
    elementFromTop(
      elemTrigger     = document.querySelectorAll('.member-nodes'),
      elemTarget      = '.member-nodes__nav',
      classToAdd      = 'member-nodes__nav--desktop-affixed',
      distanceFromTop = 0,
      unit            = 'pixels',
      offset          = document.querySelector('.member-nodes__nav').offsetHeight
    );
    
    // Scrollspy - activate menu link when corresponding section comes into view.
    for (i = 0; i < sectionItems.length; ++i){
    
      relatedSectionId = "#" + sectionItems[i].getAttribute("aria-controls");
      linkId = "#" + sectionItems[i].id;
    
      elementFromTop(
        elemTrigger     = document.querySelectorAll(relatedSectionId),
        elemTarget      = linkId,
        classToAdd      = 'member-nodes__toc-item--active',
        distanceFromTop = 100,
        unit            = 'pixels',
        offset          = 50
      );
    }
    
    // If on desktop, make sure that all of TOC is shown
    var winWidth = window.innerWidth || document.documentElement.clientWidth;
    if(
      winWidth >= mobileDesktopBreakpoint ||
      !hasClass(navEl, "member-nodes__nav--mobile-affixed")
    ){
      toggleTOC(false);
    }

  };

  
  // Add event listeners 
	window.addEventListener("scroll", throttle(classChangeEvents, 20), false);
  window.addEventListener("resize", throttle(classChangeEvents, 20), false);

  // if on mobile, and menu is affixed, then close menu on item click
  sectionLinks.forEach(item => {
    item.addEventListener('click', event => {
      var winWidth = window.innerWidth || document.documentElement.clientWidth;
      if(
        (winWidth < mobileDesktopBreakpoint) &&
        hasClass(navEl, "member-nodes__nav--mobile-affixed")
      ){
        toggleTOC(true);
      }
    });
  });
  
  // Show/hide the search when the search-toggle button is clicked, or if on the
  // homepage, scroll to the search at the top of the page and put it in focus.
  tocButton.addEventListener("click", function () {
    if(tocExists){
      var open = JSON.parse(tocButton.getAttribute("aria-expanded"));
      toggleTOC(open);
    }
  });
  
};

try {
  if(tocExists){
    updateTOC();
  }
} catch (e) {
  console.log("error updating to TOC, error message: " (e));
  // by default have the menu open, if possible.
  try {
    toggleTOC(false);
  } catch (e) {
    console.log("error displaying the TOC, error message: " (e));
  }
}
