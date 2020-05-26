// Webinar search is only for the webinars/_index.md page.
// Only use these functions on the page with the past-webinars div (contains the
// list of past webinars)
var webinarContainer = document.getElementById("past-webinars");

if (webinarContainer) {

  // The list of elements that contain all the webinar content and data
  var webinars = webinarContainer.getElementsByClassName("webinar-list__webinar");

  // The button used to display more webinars
  var showMoreButton = document.getElementById("showMoreWebinars");

  // Class for filter buttons to indicate that webinars are filtered by option
  var webinarsActiveClass = "webinar-list__filter--active";

  // Class to add when a webinar is hidden by a filter.
  // This is used soley to help the paginate function determine whether each
  // webinar should be displayed or not.
  var webinarsHiddenClass = "webinar--hidden";

  // How many webinars should be displayed at a time
  var paginate = 10;

  // Keeps track of the current "page".
  // E.g. if on page 2, then show a maximum of paginate * 2 webinars.
  // Start on zero, as we call showMoreWebinars immediately, & this adds 1 to page
  var currentPage = 1;

  // The object that will hold the filter values selected by the user
  var currentFilters = {
    searchTerm: "",
    year: [],
    tags: []
  }

  // The text items to be updated when the list is filtered or paginated
  var webinarsTextEls = {
    numDisplayed: document.getElementById("list-end_num-displayed"),
    numResults: document.getElementById("list-end_num-results"),
    filteredText: document.getElementById("list-end_filtered-text"),
    filterFeedback: document.getElementById("filter-feedback-text"),
    filterFeedback_numResults: document.getElementById("filter-feedback-text_num-results")
  };

  /**
   * updateText - Update the webinar text elements that show a count of the
   * number of webinars that are displayed and the number of webinars that
   * have been found if a filter is applied
   *    
   * @param  {number} n_displayed The number of webinars currently displayed
   * @param  {number} n_results   The number of results found by the search filter (even if not displayed)
   * @param  {boolean} filtered   True if a filter is applied, false otherwise
   */
  function updateText(n_displayed, n_results, filtered) {
    webinarsTextEls.numDisplayed.innerText = n_displayed;
    webinarsTextEls.filterFeedback_numResults.innerText = n_results;
    webinarsTextEls.numResults.innerText = n_results;
    if (filtered) {
      webinarsTextEls.filteredText.innerText = "filtered";
      webinarsTextEls.filterFeedback.style.display = "block"
    } else {
      webinarsTextEls.filteredText.innerText = "";
      webinarsTextEls.filterFeedback.style.display = "none"
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
   * filter from the list of currentFilters. The webinar lists is then filtered.
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter  
   * @param  {HTMLElement} element The UI element that called this function
   */
  function toggleFilter(filter, option, element) {

    // Whether this option is already active
    isActive = element.classList.contains(webinarsActiveClass);
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
    // update the list of webinars based on current filters
    filterWebinars();
  }



  /**  
   * filterWebinars - Uses the currentFilters object and each webinar element's
   * properties to determine whether each webinar should be displayed or hidden.
   * Then calls showWebinar() or hideWebinar(). It resets the number of webinars
   * displayed to the paginate value.
   */
  function filterWebinars() {
    var i = 0;

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < webinars.length; i++) {

      var webinar = webinars[i];
      // The webinar text to search (for text search filters, i.e. searchTerm)
      var text = webinar.textContent || webinar.innerText;
      // The data to search (for list search filters, i.e. tags, year)
      var data = webinar.dataset;
      // Indicates where matches were found
      var matches = {};

      // Loop through each of the filters in the current filters list
      for (const [filter, options] of Object.entries(currentFilters)) {
        if (options.length) {
          // For text search filters (searchTerm)
          if ((typeof options) == "string") {
            // search for the term in the webinar text
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
          // If options are blank, then don't filter the webinars by this option
        } else {
          matches[filter] = true;
        }
      }

      // and the filters together
      var allMatch = Object.keys(matches).every(function(k) {
        return matches[k] === true
      });

      if (allMatch) {
        showWebinar(webinar);
      } else {
        hideWebinar(webinar);
      }

    }

    // Reset the "page" number
    currentPage = 1;
    // Only show the specified number of webinars in the results
    paginateWebinars();

  }


  /**
   * hideWebinar - Adds the webinarsHiddenClass and uses display=none to hide
   * a webinar.  
   *    
   * @param  {HTMLElement} webinar The webinar element to hide
   */
  function hideWebinar(webinar) {
    webinar.style.display = "none";
    webinar.classList.add(webinarsHiddenClass);
  }


  /**
   * showWebinar - Removes the webinarsHiddenClass from a webinar and resets its
   * display to block
   *    
   * @param  {HTMLElement} webinar The webinar element to show
   */
  function showWebinar(webinar) {
    webinar.style.display = "block";
    webinar.classList.remove(webinarsHiddenClass);

  }


  /**  
   * activateFilter - Adds the active class to the filter UI element 
   *    
   * @param  {HTMLElement} filter description 
   */
  function activateFilter(filter) {
    filter.classList.add(webinarsActiveClass);
  }


  /**
   * deactivateFilter - Removes the active class to the filter UI element
   *    
   * @param  {HTMLElement} filter description
   */
  function deactivateFilter(filter) {
    filter.classList.remove(webinarsActiveClass)
  }



  /**
   * paginateWebinars - Given the values set in the currentPage and paginate
   * vars, and taking into account any filtering of the webinars, displays
   * a limited number of webinars to the user. Shows or hides the "Show More"
   * button as neccessary (e.g. removes it if all webinars are shown),
   * and updates the webinar text
   *    
   * @return {type}  description   
   */
  function paginateWebinars() {

    // The maximum number of webinars to display
    var numToShow = currentPage * paginate;

    // Get all the webinars that are not hidden by filter
    var matchedWebinars = [].slice.call(webinars).filter(function(webinar) {
      if (!webinar.classList.contains(webinarsHiddenClass)) {
        return webinar
      }
    });

    // Hide the show more button if there are no other webinars to show.
    if (numToShow >= matchedWebinars.length) {
      showMoreButton.style.display = "none";
    } else {
      showMoreButton.style.display = "block";
    }

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < matchedWebinars.length; i++) {
      if (i < numToShow) {
        matchedWebinars[i].style.display = "list-item";
      } else {
        matchedWebinars[i].style.display = "none";
      }
    }

    var n_webinars = webinars.length,
      n_results = matchedWebinars.length,
      filtered = matchedWebinars.length != n_webinars,
      n_max = filtered ? n_results : n_webinars,
      n_displayed = numToShow > n_results ? n_results : numToShow;

    updateText(n_displayed, n_results, filtered);

  }

  /**  
   * showMoreWebinars - Called by the showMore button. Adds a page to the 
   * currentPage variable, and then shows the next chunk of webinars.
   *    
   * @return {type}  description   
   */
  function showMoreWebinars() {

    // Add another page
    ++currentPage;
    paginateWebinars();

  }

  // Limit the list of displayed webianrs to START
  paginateWebinars();
}
