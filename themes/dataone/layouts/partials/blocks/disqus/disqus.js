(function() {
  
  var disqusDiv = document.getElementById("disqus_thread");
  if(disqusDiv){
    disqusShortname = disqusDiv.getAttribute("data-disqus-shortname");
    if(disqusShortname){
      // Don't ever inject Disqus on localhost--it creates unwanted
      // discussions from 'localhost:1313' on your Disqus account...
      // || window.location.hostname ==  "192.168.0.163"
      if (window.location.hostname == "localhost"|| window.location.hostname == "http://192.168.0.163:1313" ){
        console.log("Disqus comment thread is disabled on local host.");
        return;
      }
      var dsq = document.createElement('script');
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = '//' + disqusShortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
  }
    
})();
