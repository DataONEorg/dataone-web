// Event search is only for the index page of event directories (e.g. events, communitycalls)
// Only use these functions on the page with the all-events div (contains the
// list of past events)
var eventContainer = document.getElementById("all-events");

if (eventContainer) {

  // The list of elements that contain all the event content and data
  var events = eventContainer.getElementsByClassName("event-list__event");

  // The button used to display more events
  var showMoreButton = eventContainer.querySelector(".d1_button--show-more-button");

  // Class for filter buttons to indicate that events are filtered by option
  var eventsActiveClass = "event-list__filter--active";

  // Class to add when a event is hidden by a filter.
  // This is used soley to help the paginate function determine whether each
  // event should be displayed or not.
  var eventsHiddenClass = "event--hidden";

  // How many events should be displayed at a time
  var paginate = 10;

  // Keeps track of the current "page".
  // E.g. if on page 2, then show a maximum of paginate * 2 events.
  // Start on zero, as we call showMoreEvents immediately, & this adds 1 to page
  var currentPage = 1;

  // The object that will hold the filter values selected by the user
  var currentFilters = {
    searchTerm: "",
    year: [],
    tags: []
  }

  // The text items to be updated when the list is filtered or paginated
  var eventsTextEls = {
    numDisplayed: document.getElementById("list-end_num-displayed"),
    numResults: document.getElementById("list-end_num-results"),
    filteredText: document.getElementById("list-end_filtered-text"),
    filterFeedback: document.getElementById("filter-feedback-text"),
    filterFeedback_numResults: document.getElementById("filter-feedback-text_num-results")
  };

  /**
   * updateText - Update the event text elements that show a count of the
   * number of events that are displayed and the number of events that
   * have been found if a filter is applied
   *    
   * @param  {number} n_displayed The number of events currently displayed
   * @param  {number} n_results   The number of results found by the search filter (even if not displayed)
   * @param  {boolean} filtered   True if a filter is applied, false otherwise
   */
  function updateText(n_displayed, n_results, filtered) {
    eventsTextEls.numDisplayed.innerText = n_displayed;
    eventsTextEls.filterFeedback_numResults.innerText = n_results;
    eventsTextEls.numResults.innerText = n_results;
    if (filtered) {
      eventsTextEls.filteredText.innerText = "filtered";
      eventsTextEls.filterFeedback.style.display = "block"
    } else {
      eventsTextEls.filteredText.innerText = "";
      eventsTextEls.filterFeedback.style.display = "none"
    }
  }


  /**
   * addFilters -  Add a filter option to the currentFilters object
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter
   */
  function addFilters(filter, option) {
    // For the search term filter
    if ((typeof currentFilters[filter]) == "string") {
      // Replace the search term with the new search term.
      currentFilters.searchTerm = option;
    }
    // For year and tags filters
    else if ((typeof currentFilters[filter]) == "object") {
      // Add the filter if it's not already in the list of filters
      const index = currentFilters[filter].indexOf(option);
      if (index == -1) {
        currentFilters[filter].push(option);
      }
    }
  }


  /**
   * removeFilters - Remove a filter option from the currentFilters object
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter  
   */
  function removeFilters(filter, option) {
    // For the search term filter
    if ((typeof currentFilters[filter]) == "string") {
      // Clear the search term filter
      currentFilters.searchTerm = "";
    }
    // For year and tags filters
    else if ((typeof currentFilters[filter]) == "object") {
      // Remove the filter if it's in the list of options
      const index = currentFilters[filter].indexOf(option);
      if (index > -1) {
        currentFilters[filter].splice(index, 1);
      }
    }
  }


  /**
   * toggleFilter - Called by the filter UI element, this function checks
   * whether the filter that was clicked is active or not, then visually
   * activates or de-activates the UI element, and adds or removes the
   * filter from the list of currentFilters. The event lists is then filtered.
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter  
   * @param  {HTMLElement} element The UI element that called this function
   */
  function toggleFilter(filter, option, element) {

    // Whether this option is already active
    isActive = element.classList.contains(eventsActiveClass);
    // Tags and year filter
    isListFilter = (typeof currentFilters[filter]) == "object";

    if ((isActive && isListFilter) || ((option === "") && !isListFilter)) {
      // If the filter is already active, remove the filter from the filters list
      // and remove the active class
      removeFilters(filter, option);
      deactivateFilter(element);

    } else {
      // If the filter is not active, add the filter from the filters list
      // and add the active class
      addFilters(filter, option);
      activateFilter(element);
    }
    // update the list of events based on current filters
    filterEvents();
  }



  /**  
   * filterEvents - Uses the currentFilters object and each event element's
   * properties to determine whether each event should be displayed or hidden.
   * Then calls showEvent() or hideEvent(). It resets the number of events
   * displayed to the paginate value.
   */
  function filterEvents() {
    var i = 0;

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < events.length; i++) {

      var event = events[i];
      // The event text to search (for text search filters, i.e. searchTerm)
      var text = event.textContent || event.innerText;
      // The data to search (for list search filters, i.e. tags, year)
      var data = event.dataset;
      // Indicates where matches were found
      var matches = {};

      // Loop through each of the filters in the current filters list
      for (const [filter, options] of Object.entries(currentFilters)) {
        if (options.length) {
          // For text search filters (searchTerm)
          if ((typeof options) == "string") {
            // search for the term in the event text
            if (text.toUpperCase().indexOf(options.toUpperCase()) > -1) {
              matches[filter] = true;
            } else {
              matches[filter] = false;
            }
            // For text search filters (searchTerm)
          } else if ((typeof options) == "object") {
            // Flag to indicate if any of the optionss in the list are true
            var listMatch = false;
            var j = 0;
            for (j = 0; j < options.length; j++) {
              option = options[j];
              if (data[filter].indexOf(option) > -1) {
                listMatch = true;
              }
            }
            if (listMatch) {
              matches[filter] = true;
            } else {
              matches[filter] = false;
            }
          }
          // If options are blank, then don't filter the events by this option
        } else {
          matches[filter] = true;
        }
      }

      // and the filters together
      var allMatch = Object.keys(matches).every(function(k) {
        return matches[k] === true
      });

      if (allMatch) {
        showEvent(event);
      } else {
        hideEvent(event);
      }

    }

    // Reset the "page" number
    currentPage = 1;
    // Only show the specified number of events in the results
    paginateEvents();

  }


  /**
   * hideEvent - Adds the eventsHiddenClass and uses display=none to hide
   * a event.  
   *    
   * @param  {HTMLElement} event The event element to hide
   */
  function hideEvent(event) {
    event.style.display = "none";
    event.classList.add(eventsHiddenClass);
  }


  /**
   * showEvent - Removes the eventsHiddenClass from a event and resets its
   * display to block
   *    
   * @param  {HTMLElement} event The event element to show
   */
  function showEvent(event) {
    event.style.display = "block";
    event.classList.remove(eventsHiddenClass);

  }


  /**  
   * activateFilter - Adds the active class to the filter UI element 
   *    
   * @param  {HTMLElement} filter description 
   */
  function activateFilter(filter) {
    filter.classList.add(eventsActiveClass);
  }


  /**
   * deactivateFilter - Removes the active class to the filter UI element
   *    
   * @param  {HTMLElement} filter description
   */
  function deactivateFilter(filter) {
    filter.classList.remove(eventsActiveClass)
  }



  /**
   * paginateEvents - Given the values set in the currentPage and paginate
   * vars, and taking into account any filtering of the events, displays
   * a limited number of events to the user. Shows or hides the "Show More"
   * button as neccessary (e.g. removes it if all events are shown),
   * and updates the event text
   *    
   * @return {type}  description   
   */
  function paginateEvents() {

    // The maximum number of events to display
    var numToShow = currentPage * paginate;

    // Get all the events that are not hidden by filter
    var matchedEvents = [].slice.call(events).filter(function(event) {
      if (!event.classList.contains(eventsHiddenClass)) {
        return event
      }
    });

    // Hide the show more button if there are no other events to show.
    if (numToShow >= matchedEvents.length) {
      showMoreButton.style.display = "none";
    } else {
      showMoreButton.style.display = "block";
    }

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < matchedEvents.length; i++) {
      if (i < numToShow) {
        matchedEvents[i].style.display = "list-item";
      } else {
        matchedEvents[i].style.display = "none";
      }
    }

    var n_events = events.length,
      n_results = matchedEvents.length,
      filtered = matchedEvents.length != n_events,
      n_max = filtered ? n_results : n_events,
      n_displayed = numToShow > n_results ? n_results : numToShow;

    updateText(n_displayed, n_results, filtered);

  }

  /**  
   * showMoreEvents - Called by the showMore button. Adds a page to the 
   * currentPage variable, and then shows the next chunk of events.
   *    
   * @return {type}  description   
   */
  function showMoreEvents() {

    // Add another page
    ++currentPage;
    paginateEvents();

  }

  // Limit the list of displayed webianrs to START
  paginateEvents();
}
