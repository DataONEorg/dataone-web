{{- $bn := "header" -}}

var homepageHeader = document.getElementById("homepage_header");
if (homepageHeader) {
  
  {{- $homepage := .GetPage "/_index.md" -}}
  {{- $headerImages := $homepage.Params.header.images  -}}
  {{- $headerImagePaths := slice -}}
  {{- range $headerImages -}}
    {{- $imageResource := partial "functions/getImage" (dict "image" . "Page" $homepage) -}}
    {{- if gt $imageResource.Width 4000 -}}
      {{- $imageResource = $imageResource.Resize "4000x" -}}
    {{- end -}}
    {{- $headerImagePaths = $headerImagePaths | append $imageResource.RelPermalink -}}
  {{- end -}}

  {{- $headerImagesQuoted := apply $headerImagePaths "printf" "'%s'" "." -}}
  {{- $headerImagesString := printf "[%s]" (delimit $headerImagesQuoted ", ") -}}
  
  var headerImages = {{- $headerImagesString -}};
  
  if(headerImages){
    
    function getRandom(list) {
      var num = list.length;
      var i = Math.floor(num * Math.random());
      var newItem = list[i];
      return(newItem)
    }
    
    homepageHeader.style.setProperty("--background-image",   "url(" + getRandom(headerImages) + ")");
    
  }
  
  if(d1Utilities.isSafari()){
    homepageHeader.classList.add("{{- $bn -}}--safari")
  }
}
