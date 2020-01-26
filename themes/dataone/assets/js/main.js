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

// Bring in parameters from config to use globally
var mobileDesktopBreakpoint = {{.Site.Params.mobileDesktopBreakpoint}};

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
