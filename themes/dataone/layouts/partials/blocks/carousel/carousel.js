// Modified from:
/*
 * ES2015 simple and accessible carousel system, using ARIA
 * Website: https://van11y.net/accessible-carousel/
 * License MIT: https://github.com/nico3333fr/van11y-accessible-carousel-aria/blob/master/LICENSE
 * version: https://github.com/nico3333fr/van11y-accessible-carousel-aria/commit/74d1d9b36cc9a3f71a651e279a74467afa083793
 */
(doc => {

  'use strict';

  const CAROUSEL = 'carousel';
  const CAROUSEL_CONTAINER = 'carousel__container';
  const CAROUSEL_CONTENT = 'carousel__content'

  const CAROUSEL_CONTROL_LIST = 'carousel__controls';
  const CAROUSEL_CONTROL_LIST_ITEM = 'carousel__control-item';
  const CAROUSEL_CONTROL_LIST_LINK = 'carousel__control-link';

  const CAROUSEL_CLASS_SUFFIX = 'carousel';
  const CAROUSEL_CONTAINER_CLASS_SUFFIX = 'carousel__container';
  const CAROUSEL_CONTENT_CLASS_SUFFIX = 'carousel__content';

  const CAROUSEL_BUTTON_PREVIOUS = 'carousel__button--prev';
  const CAROUSEL_BUTTON_NEXT = 'carousel__button--next';

  const CAROUSEL_CONTENT_ID_PREFIX = 'id_carousel_content_';

  const CAROUSEL_LINK_ID_PREFIX = 'label_';

  const CAROUSEL_DATA_PREFIX_CLASS = 'data-carousel-prefix-class';

  // Data contains the classes for the pre-create buttons
  const CAROUSEL_DATA_BTN_PREV = 'data-carousel-btn-prev';
  const CAROUSEL_DATA_BTN_NEXT = 'data-carousel-btn-next';

  const CAROUSEL_DATA_TRANSITION = 'data-carousel-transition';
  const CAROUSEL_DATA_ACTIVE_SLIDE = 'data-carousel-active-slide';
  const CAROUSEL_DATA_ELEMENT_NUMBER = 'data-carousel-control-element-number';
  const CAROUSEL_DATA_EXISTING_HX = 'data-carousel-existing-hx';
  const CAROUSEL_DATA_HX = 'data-carousel-hx';
  const CAROUSEL_DATA_SPAN_TEXT = 'data-carousel-span-text';
  const CAROUSEL_DATA_HIDE_ARROWS_FOCUS = 'data-carousel-hide-arrows-focus';

  const VISUALLY_HIDDEN_CLASS = 'carousel__screen-reader-text';

  /*
   * recommended settings by a11y expert
   */
  const ATTR_ROLE = 'role';
  const ATTR_CONTROL = 'aria-controls';
  const ATTR_LABELLEDBY = 'aria-labelledby';
  const ATTR_HIDDEN = 'aria-hidden';
  const ATTR_SELECTED = 'aria-selected';

  const ATTR_TYPE = 'type';
  const ATTR_BUTTON = 'button';
  const ATTR_ALT = 'alt';
  const ATTR_SRC = 'src';
  const ATTR_CLASS = 'class';

  const ATTR_TABLIST = 'tablist';
  const ATTR_TABPANEL = 'tabpanel';
  const ATTR_TAB = 'tab';
  const ATTR_PRESENTATION = 'presentation';

  const findById = id => doc.getElementById(id);

  const addClass = (el, className) => {
    if (el.classList) {
      el.classList.add(className); // IE 10+
    } else {
      el.className += ' ' + className; // IE 8+
    }
  }

  const hasClass = (el, className) => {
    if (el.classList) {
      return el.classList.contains(className); // IE 10+
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); // IE 8+ ?
    }
  }

  const setAttributes = (node, attrs) => {
    Object
      .keys(attrs)
      .forEach((attribute) => {
        node.setAttribute(attribute, attrs[attribute]);
      });
  };

  /* gets an element el, search if it is child of parent class, returns id of the parent */
  let searchParent = (el, parentClass) => {
    let found = false;
    let parentElement = el;
    while (parentElement && found === false) {
      if (hasClass(parentElement, parentClass) === true) {
        found = true;
      } else {
        parentElement = parentElement.parentNode;
      }
    }
    if (found === true) {
      return parentElement.getAttribute('id');
    } else {
      return '';
    }
  }

  /**
   * gets an element el, search if it is child of parent class, returns parent
   * @param  {Node} el
   * @param  {String} parentClass
   * @return {Node} parentElement
   */
  let searchClosestParent = (el, parentClass) => {
    let found = false;
    let parentElement = el.parentNode;
    while (parentElement && found === false) {
      if (hasClass(parentElement, parentClass) === true) {
        found = true;
      } else {
        parentElement = parentElement.parentNode;
      }
    }
    if (found === true) {
      return parentElement;
    } else {
      return '';
    }
  }

  const selectCarrouselElement = config => {
    let controlListLinkToActivate = config.controlListLink;
    let panelControledToActivate = config.panelControled;
    let carouselContainer = config.carouselContainer;
    let carousel = carouselContainer.parentNode;
    let giveFocus = (config.giveFocus ? true : false);

    // unselect current
    let current = Number(carouselContainer.getAttribute(CAROUSEL_DATA_ACTIVE_SLIDE));
    let controlListLinkToDisable = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="${current}"]`);
    let panelControledToDisable = findById(controlListLinkToDisable.getAttribute(ATTR_CONTROL));
    setAttributes(controlListLinkToDisable, {
      [ATTR_SELECTED]: 'false',
      'tabindex': '-1'
    });
    setAttributes(panelControledToDisable, {
      [ATTR_HIDDEN]: 'true'
    });

    // select current
    setAttributes(controlListLinkToActivate, {
      [ATTR_SELECTED]: 'true',
      'tabindex': '0'
    });
    setAttributes(panelControledToActivate, {
      [ATTR_HIDDEN]: 'false'
    });
    setAttributes(carouselContainer, {
      [CAROUSEL_DATA_ACTIVE_SLIDE]: Number(controlListLinkToActivate.getAttribute(CAROUSEL_DATA_ELEMENT_NUMBER))
    });
    if (giveFocus) {
      // avoid bug on VoiceOver
      setTimeout(() => controlListLinkToActivate.focus(), 0);
    }


  }

  /** Find all carousels inside a container
   * @param  {Node} node Default document
   * @return {Array}
   */
  const $listCarrousels = (node = doc) => [].slice.call(node.querySelectorAll('.' + CAROUSEL));

  /**
   * Build carousels for a container
   * @param  {Node} node
   */
  const attach = (node, addListeners = true) => {

    $listCarrousels(node)
      .forEach((carouselNode) => {

        let iLisible = Math.random().toString(32).slice(2, 12);
        let carouselContainer = carouselNode.querySelector('.' + CAROUSEL_CONTAINER);
        if (!carouselContainer) {
          return
        };
        let prefixClassName = carouselContainer.hasAttribute(CAROUSEL_DATA_PREFIX_CLASS) === true ? carouselContainer.getAttribute(CAROUSEL_DATA_PREFIX_CLASS) + '-' : '';

        // hx
        let carouselExistingHx = carouselContainer.hasAttribute(CAROUSEL_DATA_EXISTING_HX) === true ? carouselContainer.getAttribute(CAROUSEL_DATA_EXISTING_HX) : '';
        let carouselHx = carouselContainer.hasAttribute(CAROUSEL_DATA_HX) === true ? carouselContainer.getAttribute(CAROUSEL_DATA_HX) : 'span';
        let carouselSpanText = carouselContainer.hasAttribute(CAROUSEL_DATA_SPAN_TEXT) === true ? carouselContainer.getAttribute(CAROUSEL_DATA_SPAN_TEXT) + ' ' : '';

        // hide buttons from focus
        let carouselHideArrowsFocus = carouselContainer.hasAttribute(CAROUSEL_DATA_HIDE_ARROWS_FOCUS) === true;

        // Next/prev buttons
        let carouselButtonPrevClass = carouselContainer.hasAttribute(CAROUSEL_DATA_BTN_PREV) === true ? carouselContainer.getAttribute(CAROUSEL_DATA_BTN_PREV) : '';
        let carouselButtonNextClass = carouselContainer.hasAttribute(CAROUSEL_DATA_BTN_NEXT) === true ? carouselContainer.getAttribute(CAROUSEL_DATA_BTN_NEXT) : '';

        let carouselButtonPrev = carouselNode.querySelector('.' + carouselButtonPrevClass);
        let carouselButtonNext = carouselNode.querySelector('.' + carouselButtonNextClass);

        // current active panel
        let carouselActiveSlide = carouselContainer.hasAttribute(CAROUSEL_DATA_ACTIVE_SLIDE) === true ? Number(carouselContainer.getAttribute(CAROUSEL_DATA_ACTIVE_SLIDE)) : 1;

        // carousel
        addClass(carouselNode, prefixClassName + CAROUSEL_CLASS_SUFFIX);

        // container
        addClass(carouselContainer, prefixClassName + CAROUSEL_CONTAINER_CLASS_SUFFIX);

        // select control list
        let carouselControlList = carouselNode.querySelector("."+CAROUSEL_CONTROL_LIST);
        
        setAttributes(carouselControlList, {
          [ATTR_ROLE]: ATTR_TABLIST
        });

        // contents
        let $listCarrouselContent = [].slice.call(carouselContainer.querySelectorAll('.' + CAROUSEL_CONTENT));
        $listCarrouselContent
          .forEach((carouselContent, indexCarrouselContent) => {
            let contentId = `${CAROUSEL_CONTENT_ID_PREFIX}${iLisible}_${indexCarrouselContent}`;
            let linkId = `${CAROUSEL_LINK_ID_PREFIX}${contentId}`;
            let isSelected = (carouselActiveSlide === indexCarrouselContent + 1);
            let hx;
            let textHx;
            let carouselControlItem = carouselControlList.querySelectorAll("." + CAROUSEL_CONTROL_LIST_ITEM).item(indexCarrouselContent);
            let carouselControlLink = carouselControlItem.querySelector("." + CAROUSEL_CONTROL_LIST_LINK);

            addClass(carouselContent, prefixClassName + CAROUSEL_CONTENT_CLASS_SUFFIX);
            addClass(carouselContent, CAROUSEL_CONTENT_CLASS_SUFFIX);

            setAttributes(carouselContent, {
              [ATTR_ROLE]: ATTR_TABPANEL,
              'id': contentId,
              [ATTR_HIDDEN]: (isSelected ? 'false' : 'true'),
              [ATTR_LABELLEDBY]: linkId
            });

            if (carouselExistingHx !== '') {
              hx = carouselContent.querySelector(carouselExistingHx);
              if (hx) {
                setAttributes(hx, {
                  'tabindex': '-1'
                });
                textHx = hx.textContent;
              }

            } else {
              // text
              textHx = carouselSpanText + (indexCarrouselContent + 1);
              // insert hx
              let hxToInsert = document.createElement(carouselHx);
              setAttributes(hxToInsert, {
                'tabindex': '-1'
              });
              hxToInsert.innerHTML = textHx;
              addClass(hxToInsert, VISUALLY_HIDDEN_CLASS);
              hxToInsert = carouselContent.insertBefore(hxToInsert, carouselContent.firstChild);
            }

            // update control elements  
            setAttributes(carouselControlLink, {
              id: linkId,
              [ATTR_ROLE]: ATTR_TAB,
              [ATTR_CONTROL]: contentId,
              [ATTR_SELECTED]: isSelected,
              [CAROUSEL_DATA_ELEMENT_NUMBER]: (indexCarrouselContent + 1),
              tabindex: (isSelected ? '0' : '-1')
            });

          });

        // Set attributes on prev & next buttons
        setAttributes(carouselButtonPrev, {
          'id': CAROUSEL_BUTTON_PREVIOUS + '_' + iLisible
        });
        setAttributes(carouselButtonNext, {
          'id': CAROUSEL_BUTTON_NEXT + '_' + iLisible
        });

        if (carouselHideArrowsFocus) {
          setAttributes(carouselButtonPrev, {
            [ATTR_HIDDEN]: true,
            'tabindex': '-1'
          });
          setAttributes(carouselButtonNext, {
            [ATTR_HIDDEN]: true,
            'tabindex': '-1'
          });
        }


        // set up active
        setAttributes(carouselContainer, {
          [CAROUSEL_DATA_ACTIVE_SLIDE]: carouselActiveSlide
        });

      });


    /* listeners */
    if (addListeners) {
      ['click', 'keydown']
      .forEach(eventName => {

        doc.body
          .addEventListener(eventName, e => {
            // click on control list
            let idControlListLink = searchParent(e.target, CAROUSEL_CONTROL_LIST_LINK);
            let idPanel = searchParent(e.target, CAROUSEL_CONTENT);
            let idButtonPrevious = searchParent(e.target, CAROUSEL_BUTTON_PREVIOUS);
            let idButtonNext = searchParent(e.target, CAROUSEL_BUTTON_NEXT);

            // click on button control
            if (idControlListLink !== '' && eventName === 'click') {
              // select control item, panel and carousel
              let controlListLink = findById(idControlListLink);
              let panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              let carouselContainer = panelControled.parentNode;

              selectCarrouselElement({
                controlListLink: controlListLink,
                panelControled: panelControled,
                carouselContainer: carouselContainer
              });

            }

            // click on prev
            if (idButtonPrevious !== '' && eventName === 'click') {
              let buttonPrevious = findById(idButtonPrevious);
              let carousel = buttonPrevious.parentNode.parentNode;
              let carouselContainer = carousel.querySelector('.' + CAROUSEL_CONTAINER);
              let controlListLink;
              let panelControled;

              // find current one
              let current = Number(carouselContainer.getAttribute(CAROUSEL_DATA_ACTIVE_SLIDE));

              if (current > 1) {
                controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="${current-1}"]`);
                panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              } else {
                // take last one
                controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_ITEM}:last-child > .${CAROUSEL_CONTROL_LIST_LINK}`);
                panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              }

              selectCarrouselElement({
                controlListLink: controlListLink,
                panelControled: panelControled,
                carouselContainer: carouselContainer
              });

            }

            // click on next
            if (idButtonNext !== '' && eventName === 'click') {
              let buttonNext = findById(idButtonNext);
              let carousel = buttonNext.parentNode.parentNode;
              let carouselContainer = carousel.querySelector('.' + CAROUSEL_CONTAINER);

              let current = Number(carouselContainer.getAttribute(CAROUSEL_DATA_ACTIVE_SLIDE));

              // find next one to activate
              let controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="${current+1}"]`);
              let panelControled;

              if (controlListLink) {
                panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              } else {
                controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="1"]`);
                panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              }

              selectCarrouselElement({
                controlListLink: controlListLink,
                panelControled: panelControled,
                carouselContainer: carouselContainer
              });

            }

            // Keyboard events on control list
            if (idControlListLink !== '' && eventName === 'keydown') {
              let controlListLinkFocused = findById(idControlListLink);
              let carousel = searchClosestParent(controlListLinkFocused, CAROUSEL);
              let carouselContainer = carousel.querySelector('.' + CAROUSEL_CONTAINER);
              let controlListLink;
              let panelControled;
              let current;

              // home = first tab
              if (e.keyCode === 36) {
                controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="1"]`);
                panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              }
              // strike end on the tab => last tab
              else if (e.keyCode === 35) {
                controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_ITEM}:last-child > .${CAROUSEL_CONTROL_LIST_LINK}`);
                panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
              }
              // strike up or left on the tab => previous tab
              else if ((e.keyCode === 37 || e.keyCode === 38) && !e.ctrlKey) {
                // find current one
                current = Number(carouselContainer.getAttribute(CAROUSEL_DATA_ACTIVE_SLIDE));

                if (current > 1) {
                  controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="${current-1}"]`);
                  panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
                } else {
                  // take last one
                  controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_ITEM}:last-child > .${CAROUSEL_CONTROL_LIST_LINK}`);
                  panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
                }

              }
              // strike down or right in the tab => next tab
              else if ((e.keyCode === 40 || e.keyCode === 39) && !e.ctrlKey) {
                // find current one
                current = Number(carouselContainer.getAttribute(CAROUSEL_DATA_ACTIVE_SLIDE));

                // find next one to activate
                controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="${current+1}"]`);

                if (controlListLink) {
                  panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
                } else {
                  controlListLink = carousel.querySelector(`.${CAROUSEL_CONTROL_LIST_LINK}[${CAROUSEL_DATA_ELEMENT_NUMBER}="1"]`);
                  panelControled = findById(controlListLink.getAttribute(ATTR_CONTROL));
                }
              } else return;

              selectCarrouselElement({
                controlListLink: controlListLink,
                panelControled: panelControled,
                carouselContainer: carouselContainer,
                giveFocus: true
              });

            }

            // Keyboard events in panels
            if (idPanel !== '' && eventName === 'keydown') {
              let panelControled = findById(idPanel);
              let controlListLinkFocus = findById(panelControled.getAttribute(ATTR_LABELLEDBY));

              if ((e.keyCode === 37 || e.keyCode === 38) && e.ctrlKey) {
                // avoid bug on VoiceOver
                setTimeout(() => controlListLinkFocus.focus(), 0);
              }

              /*if (e.keyCode === 33 && e.ctrlKey) {
              }*/

            }



          }, true);


      });

    }

  };

  const onLoad = () => {
    attach();
    document.removeEventListener('DOMContentLoaded', onLoad);
  }

  document.addEventListener('DOMContentLoaded', onLoad);

  window.van11yAccessibleCarrouselAria = attach;



})(document);
