// {{- $site := . -}}
// {{- $bnBase := "datetime" -}}
// {{- $p := $site.Params.prefix -}}
// {{- $bn := print $p $bnBase -}}
// {{- $blockDir:=  $site.Params.blockDir -}}
// {{- $timezonesPath := path.Join $blockDir (print $bnBase "/timezones.json") -}}
// {{ $timezoneString := readFile $timezonesPath }}

/**
 * {{ $bn }} - Functions for the date time elements
 */ 
(function( {{ $bn }}, undefined ) {

  // The block's JS
  var block = {{ $bn }};
  var blockName = "{{ $bn }}";

  // The timezone data
  const timezones = {{ $timezoneString }};

  const inputSelector = "." + blockName + "__tz-input";

  // Get the datetime (<time>) elements. Each contains the display time,
  // the timezone, as well as the input element.
  block.timeEls = document.getElementsByClassName(blockName);
  // Get the user's time zone, default to DataONE location
  block.userTZ = moment.tz.guess() || "America/Los_Angeles";

  var localizeTimes = function(){
    if(block.timeEls){
      for (var i = 0; i < block.timeEls.length; i++) {
        
        var timeEl = block.timeEls[i];
        var localize = timeEl.classList.contains(blockName + "--localize");
        
        // Update the displayed datetime and timezone to the user's local time.
        // if timeEl has class "datetime--localized"
        if(localize){
          changeTimezone(timeEl, block.userTZ);
        }
        
      }
    }
    
  }

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
        var displayDateEl = timeEl.getElementsByClassName(blockName + "__displaydate")[0];
        // Get the timezone element
        var timezoneEl = timeEl.getElementsByClassName(blockName + "__timezone")[0];
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

  var initializeAutocomplete = function(){
    // The autoComplete.js Engine instance creator
    const autoCompleteJS = new autoComplete({
      selector: inputSelector,
      name: "timezones",
      data: {
        src: timezones,
        key: ["name"],
        results: (list) => {
          // Filter duplicates
          const filteredResults = Array.from(
            new Set(list.map((value) => value.match))
          ).map((tz) => {
            return list.find((value) => value.match === tz);
          });
          return filteredResults;
        }
      },
      trigger: {
        event: ["input", "focus"]
      },
      searchEngine: "strict",
      highlight: true,
      maxResults: 7,
      resultItem: {
        content: (data, element) => {
          // Modify Results Item Style
          element.style = "display: flex; flex-direction: column;";
          // Modify Results Item Content
          element.innerHTML = `<span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
            ${data.match}</span>
            <span style="margin-top: 4px; display: flex; align-items: center; font-size: 13px; font-weight: 300; text-transform: uppercase; color: rgba(0,0,0,.4);">
          ${data.value.value}</span>`;
        }
      },
      noResults: (dataFeedback, generateList) => {
        // Generate autoComplete List
        generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
        // No Results List Item
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;
        document
          .querySelector(`#${autoCompleteJS.resultsList.idName}`)
          .appendChild(result);
      },
      onSelection: (feedback) => {
        // Change the time
        var timeEl = feedback.event.target.closest('time');
        var newTimezone = feedback.selection.value.value;
        changeTimezone(timeEl, newTimezone);
        // Blur, empty, and hide the input
        document.querySelector("#autoComplete").blur();
        document.querySelector("#autoComplete").value = "";
        block.toggleTimezoneInput(document.querySelector("#autoComplete ~ button"));
      }
    });
  }

  /**
   * toggleTimezoneInput - Handler function for when the "edit timezone" button is
   * clicked.
   * @param  {HTMLElement} button The "edit timezone" button
   * 
   */ 
  block.toggleTimezoneInput = function (button) {
    if(button){
      var open = JSON.parse(button.getAttribute("aria-expanded"));
      // get the input element, a sibling of the button
      inputEl = button.parentNode.getElementsByClassName(blockName + "__tz-input")[0];
      d1Utilities.toggleElement(button, inputEl, open);
      block.inputElinput = inputEl.querySelector("input");
      if(block.inputElinput){
        block.inputElinput.focus();
        block.inputElinput.value = "";
      }
    }
  };

  localizeTimes();

  if(document.querySelector(inputSelector)){
    initializeAutocomplete();
  }

}( window.{{ $bn }} = window.{{ $bn }} || {} ));

