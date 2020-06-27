/**
 * toggleTimezoneInput - Handler function for when the "edit timezone" button is
 * clicked.
 * @param  {HTMLElement} button The "edit timezone" button
 * 
 */ 
var toggleTimezoneInput = function (button) {
  if(button){

    var open = JSON.parse(button.getAttribute("aria-expanded"));
    // get the input element, a sibling of the button
    inputEl = button.parentNode.getElementsByClassName("datetime__tz-input")[0];
    d1Utilities.toggleElement(button, inputEl, open);
    
    var inputElinput = inputEl.querySelector("input");
    if(inputElinput){
      inputElinput.focus();
      inputElinput.value = "";
      inputEl.clear();
    }
  }
  
};

(function() {

  /**
   * var changeTimezone - Converts the displayed time in an HTML <time> element to a specified timezone
   *  
   * @param  {HTMLElement} timeEl the HTML time element. The element must have specific attributes and inner elements.
   *  Required attributes:
   *   1) "datetime" a string indicating the date and time in ISO format
   *   2) "data-format" a string indicating the display format of the date time, use moment.js formatting (https://devhints.io/moment)
   * Required inner elements:
   *  1) An element with the class "datetime__displaydate" that contains or will contain the formatted datetime
   *  2) An input element with the class "datetime__timezone" that contains or will contain the timezone information
   * @param  {string} newTimezone The name of the new timezone. eg. "Africa/Accra". For a list of options, see (https://raw.githubusercontent.com/moment/moment-timezone/develop/data/unpacked/latest.json)
   */ 
  var changeTimezone = function(timeEl, newTimezone){

    try{
      // timezone will be null if newTimezone is not a valid timezone
      var timezone = moment.tz.zone(newTimezone);

      if(timezone && timeEl){
        // Get the displayDate element
        var displayDateEl = timeEl.getElementsByClassName("datetime__displaydate")[0];
        // Get the timezone element
        var timezoneEl = timeEl.getElementsByClassName("datetime__timezone")[0];
        // Get the display format
        var format = timeEl.dataset.format;
        // Get the ISO time stamp from the datetime attribute
        var dateString = timeEl.getAttribute("datetime");
        // Convert it to a momentjs object
        var dateMoment = moment(dateString);
        // Convert it to the new timezone in the desired format
        var newDate = dateMoment.tz(newTimezone).format(format);
        // Get the new timezone abbreviation for display
        var newTimezone_short = dateMoment.tz(newTimezone).format('z');
        // Update the <time> element
        if( newDate != "Invalid date" ){
          if(displayDateEl){
            displayDateEl.innerText = newDate;
          }
          if(timezoneEl){
            timezoneEl.innerText = newTimezone_short;
          }
        } else {
          console.log("Attempt to change the timezone of a time element resulted in an invalid date. Returning original date instead, which is: " + displayDateEl.innerText );
        }
        
      }
    }
    catch (e) {
      console.log("Error changing the timezone of a time element. Error message:" + e);
    }
  }

  /**
   * getTimezone - Find the Internet Assigned Numbers Authority timezone associated with specific geo coordinates.
   *  
   * @param  {number} lat                             Latitude
   * @param  {number} lng                             Longitude
   * @param  {type} username = "marvelous_envelope"   user name for the geonames.org API
   * @param  {function} callback                      A function to call after the timezone is retrieved successfully
   * @return {string|boolean}                         Internet Assigned Numbers Authority timezone, or false if there was an error
   */ 
  var getTZFromCoords = function (lat, lng, callback, username = "marvelous_envelope"){
    var geonamesEndpoint = "http://api.geonames.org/timezoneJSON?lat=" + lat + "&lng=" + lng + "&username=" + username;
    var request = new XMLHttpRequest();
    request.open('GET', geonamesEndpoint, true);
    request.onload = function() {
      var zone = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        callback(zone.timezoneId);
      } else {
        console.log('error getting timezone from coordinates, response from geonames: ' + response);
        return false;
      }
    }
    request.send();
  };

  // Set up Algolia search
  var client = algoliasearch('QOXEJBQETE', 'bbe8439854be88831fb17d73831df877');
  var index = client.initIndex('timezones');

  // create the first autocomplete.js dataset: timezones
  var timezones = {
    source: autocomplete.sources.hits(index, {hitsPerPage: 2}),
    displayKey: 'name',
    templates: {
      header: '<div class="tz-input-header">Timezones</div>',
        suggestion({_highlightResult}) {
          return `<span class="ap-suggestion-icon" style="white-space:normal;">
          <svg width="20" height="21" xmlns="http://www.w3.org/2000/svg"><g fill="currentcolor" fill-rule="evenodd"><path d="M16.8.5v7.4a7.5 7.5 0 00-5.4 0v-3L5.9 3.2v12.6L.5 18V3.4L5.9 1l5.5 2.1L16.8.5z"/><path d="M14 9.4a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.8a3.6 3.6 0 100 7.3 3.6 3.6 0 000-7.3z"/><path d="M13 15l1.5-2.7 1.2.7-1 1.7 1.2 1.2-1 1z"/></g></svg>
          </span>
          <span>${_highlightResult.name.value}</span>`;
        }
    }
  };

  // create the second dataset: places
  // we automatically inject the default CSS
  // all the places.js options are available
  var placesDataset = placesAutocompleteDataset({
    appId: 'plOAL9PGY18J',
    apiKey: '7949704c8499dcba871219e38890255a',
    algoliasearch: algoliasearch,
    templates: {
      header: '<div class="tz-input-header">Cities</div>'
    },
    hitsPerPage: 3
  });

  // Get the datetime (<time>) elements. Each contains the display time,
  // the timzone, as well as the algolia search input element.
  var timeEls = document.getElementsByClassName("datetime");
  // Get the user's time zone, default to DataONE location
  var userTZ = moment.tz.guess() || "America/Los_Angeles";
  
  
  for (var i = 0; i < timeEls.length; i++) {
    
    var timeEl = timeEls[i];
    var inputEl = timeEl.getElementsByClassName("datetime__tz-input")[0];
    var change_timezone = timeEl.classList.contains("datetime--change-timezone");
    var localize = timeEl.classList.contains("datetime--localize");
    
    // Update the displayed datetime and timezone to the user's local time.
    // if timeEl has class "datetime--localized"
    if(localize){
      changeTimezone(timeEl, userTZ);
    }
    
    // Allow user to select a different timezone if timeEl has class "datetime--localized"
    if(change_timezone){
      // Initiate the Algolia search
      var autocompleteInstance = autocomplete(inputEl, {
        hint: false,
        debug: true,
        cssClasses: {
          root: 'datetime__tz-input',
          prefix: 'tz-input'
        }
      }, [
        timezones,
        placesDataset
      ]);

      var autocompleteChangeEvents = ['selected', 'autocompleted'];
      
      /**    
       * handleAutocomplete - What to do when a search option is selected or completed
       *      
       * @param  {event}          event         The autocomplete event   
       * @param  {object}         suggestion    The found search item
       * @param  {string|number}  datasetName   The ID used for the dataset (places for locations or 1 for timezones)  
       */     
      var handleAutocomplete = function(event, suggestion, datasetName) {
        
        // make sure we have the correct tiime element (TODO)
        var timeEl = this.parentNode.parentNode;
        
        if(datasetName == "places"){
          getTZFromCoords(suggestion.latlng.lat, suggestion.latlng.lng, function(newTimezone){
            changeTimezone(timeEl, newTimezone);
          });
        } else {
          if(suggestion.name){
            changeTimezone(timeEl, suggestion.name);
          }
        }
        
        // clear and hide the input again.
        var button = timeEl.getElementsByClassName("datetime__button")[0];
        toggleTimezoneInput(button);
        
      };
      

      // Update the datetime and timezone when user selects from search
      autocompleteChangeEvents.forEach(function(eventName) {
        
        autocompleteInstance.off('autocomplete:'+ eventName, handleAutocomplete);
        autocompleteInstance.on('autocomplete:'+ eventName, handleAutocomplete);
        
      });
      
      /**    
       * handleFocusout - What to do when the search input loses focus
       */
      var handleFocusout = function(){
        var inputEl = this;
        var timeEl = this.parentNode.parentNode;
        var button = timeEl.getElementsByClassName("datetime__button")[0];
        inputEl.value = ""
        toggleTimezoneInput(button);
      }
      
      inputEl.removeEventListener("focusout", handleFocusout);
      inputEl.addEventListener("focusout", handleFocusout);
      
    } // --- end if(change_timezone)--- 
    
  }

})();
