/**
 * people - Functions to filter people for the filter type layout.
 */
(function(peopleList, undefined) {

  // Person search is only for the people/_index.md page.
  // Only use these functions on the page with the past-people div (contains the
  // list of past people)
  var peopleContainer = document.querySelector(".people");

  if (peopleContainer) {

    // The list of elements that contain all the person content and data
    var people = peopleContainer.getElementsByClassName("people__person");

    // The filter chip elements that we will highlight when a person is hovered
    var filterEls = peopleContainer.getElementsByClassName("people__filter-chip");

    // Class for filter checkboxes to indicate that people are filtered by option
    var activeClass = "people__filter--active";

    // Class for filter checkboxes to indicate that the person in focus or 
    // moused over is part of the team displayed by the filter
    var highlightClass = "people__filter--matching";

    // Class to add when a person is hidden by a filter.
    // This is used soley to help the paginate function determine whether each
    // person should be displayed or not.
    var hiddenClass = "people__person--hidden";

    // The object that will hold the filter values selected by the user
    var currentFilters = {
      d1team: []
    }
  }

  /**
   * addFilters -  Add a filter option to the currentFilters object
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter
   */
  const addFilters = function(filter, option) {
    const index = currentFilters[filter].indexOf(option);
    if (index == -1) {
      currentFilters[filter].push(option);
    }
  }
  /**
   * removeFilters - Remove a filter option from the currentFilters object
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter  
   */
  const removeFilters = function(filter, option) {
    // Remove the filter if it's in the list of options
    const index = currentFilters[filter].indexOf(option);
    if (index > -1) {
      currentFilters[filter].splice(index, 1);
    }
  }

  /**
   * toggleFilter - Called by the filter UI element, this function checks
   * whether the filter that was clicked is active or not, then visually
   * activates or de-activates the UI element, and adds or removes the
   * filter from the list of currentFilters. The person lists is then filtered.
   *    
   * @param  {string} filter The name of the filter
   * @param  {string} option The option selected for that filter  
   * @param  {HTMLElement} element The UI element that called this function
   */
  peopleList.toggleFilter = function(filter, option, element) {

    // Whether this option is already active
    isActive = element.classList.contains(activeClass);

    if (isActive) {
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
    // update the list of people based on current filters
    filterPeople();
  }

  /**  
   * filterPeople - Uses the currentFilters object and each person element's
   * properties to determine whether each person should be displayed or hidden.
   * Then calls showPerson() or hidePerson(). It resets the number of people
   * displayed to the paginate value.
   */
  const filterPeople = function() {
    var i = 0;

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < people.length; i++) {

      var person = people[i];

      // The data to search (for list search filters, i.e. tags, year)
      var data = person.dataset;

      // Indicates where matches were found
      var matches = {};

      // Loop through each of the filters in the current filters list
      for (const [filter, options] of Object.entries(currentFilters)) {
        if (options.length) {
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
          // If options are blank, then don't filter the people by this option
        } else {
          matches[filter] = true;
        }
      }

      // and the filters together
      var allMatch = Object.keys(matches).every(function(k) {
        return matches[k] === true
      });

      if (allMatch) {
        showPerson(person);
      } else {
        hidePerson(person);
      }

    }


  }

  /**
   * hidePerson - Adds the hiddenClass and uses display=none to hide
   * a person.  
   *    
   * @param  {HTMLElement} person The person element to hide
   */
  const hidePerson = function(person) {
    person.style.display = "none";
    person.classList.add(hiddenClass);
  }

  /**
   * showPerson - Removes the hiddenClass from a person and resets its
   * display to block
   *    
   * @param  {HTMLElement} person The person element to show
   */
  const showPerson = function(person) {
    person.style.display = "block";
    person.classList.remove(hiddenClass);
  }

  /**  
   * activateFilter - Adds the active class to the filter UI element. Shows that
   * the results are being filtered by this filter.
   *    
   * @param  {HTMLElement} filter description 
   */
  const activateFilter = function(filter) {
    filter.classList.add(activeClass);
  }

  /**
   * deactivateFilter - Removes the active class to the filter UI element.
   *    
   * @param  {HTMLElement} filter description
   */
  const deactivateFilter = function(filter) {
    filter.classList.remove(activeClass)
  }

  /**
   * highlightFilter - Show indication that the person in focus or moused-over
   * is part of the team shown by the filter
   *    
   * @param  {HTMLElement} filter description
   */
  const highlightFilter = function(filter) {
    filter.classList.add(highlightClass)
  }

  /**
   * unhighlightFilter - Remove the filter highlighting
   *    
   * @param  {HTMLElement} filter description
   */
  const unhighlightFilter = function(filter) {
    filter.classList.remove(highlightClass)
  }


  /**  
   * peopleList - Given a person element, find the filter element that 
   * corresponds to their data one team, then highlight that filter.
   * Add a listener to remove the highlighting when the user's mouse leaves it
   * or when the focus out.
   *    
   * @param  {HTMLElement} element The element that activated this function with a mouseenter or focus event
   * @param  {string} event   The name of the event that triggered this function
   * @param  {string} team    The team that the person is part of. Much match the inner text of the corresponding filter element exactly.
   */
  peopleList.showTeam = function(element, event, team) {

    // Find the matching filter element
    var i = 0;
    var matchingFilter = "";
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < filterEls.length; i++) {
      var filter = filterEls[i];
      if (filter.innerText == team) {
        matchingFilter = filter;
      };
    }

    // Visually indicate that the filter is a match
    highlightFilter(matchingFilter);

    if (event == "mouseenter") {
      element.addEventListener('mouseleave', function resetTeam(e) {
        unhighlightFilter(matchingFilter);
        // One-time handling of the event
        e.currentTarget.removeEventListener(e.type, resetTeam);
      });
    } else if (event == "focus") {
      element.addEventListener('blur', function resetTeam(e) {
        unhighlightFilter(matchingFilter);
        // One-time handling of the event
        e.currentTarget.removeEventListener(e.type, resetTeam);
      });
    }

  }


}(window.peopleList = window.peopleList || {}));
