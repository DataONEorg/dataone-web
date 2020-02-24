// Bring in parameters from config to use globally
var mobileDesktopBreakpoint = {{.Site.Params.mobileDesktopBreakpoint}};
var disqusShortname = {{ .Site.DisqusShortname }};



/**
 * var toggleElement - Add or remove aria-expanded or aria-hidden on a button
 * and element (e.g. menu) respectivly.
 *  
 * @param  {HTMLElement} button  The button that toggles the element
 * @param  {HTMLElement} element The element to show/hide with aria attributes
 * @param {boolean} open - indicates whether the element should be closed (true)
 * or open (false)
 */ 
var toggleElement = function(button, element, open){
  try{
    if(element !== null && button !== null){
      button.setAttribute("aria-expanded", !open);
      element.setAttribute("aria-hidden", open);
    }
  } catch(e) {
    console.log("Error toggling the search");
    console.log(e);
  }
};

/**  
 * throttle - Limits the number of times that a function can be called within a time period. 
 * From: https://www.afasterweb.com/2017/09/26/performance-basics-throttling/
 *    
 * @param  {function} callback The function to throttle  
 * @param  {number}   limit    Minimum milliseconds to wait before allowing the callback function to be called again 
 * @return {function} Returns the callback function wrapped in the throttle function 
 */   
var throttle = function (callback, limit) {
  var tick = false;
  return function () {
    if (!tick) {
      callback.call();
      tick = true;
      setTimeout(function () {
        tick = false;
      }, limit);
    }
  }
};


// Combine all javascript from libraries directory
{{ $librariesdir :=  "themes/dataone/assets/js/libraries/"}}
{{ range (readDir $librariesdir) }}
  {{ if (strings.HasSuffix .Name "js") }}
    {{ $jspath := path.Join $librariesdir .Name }}
    {{ readFile $jspath }}
  {{ end }}
{{ end }}

// Combine all javascript from block subdirectories
{{ $blockdir :=  .Site.Params.blockDir}}
{{ range (readDir $blockdir) }}
  {{ $dirname := .Name }}
  {{ $blocksubdir := path.Join $blockdir $dirname }}
  {{ $stat := os.Stat $blocksubdir }}
  {{ if $stat.IsDir }}
    {{ range (readDir $blocksubdir) }}
      {{ if (strings.HasSuffix .Name "js") }}
        {{ $jspath := path.Join $blocksubdir .Name }}
          {{ readFile $jspath }}
      {{ end }}
    {{ end }}
  {{ end }}
{{ end }}
// 
// 
// var names = Object.keys(moment.tz._zones)
//     .map(function(k) { return moment.tz._zones[k].split('|')[0]; })
//     .filter(function(z) { return z.indexOf('/') >= 0; });
// 
// console.log(names);
// 
// 
// console.log(moment.tz._zones);
