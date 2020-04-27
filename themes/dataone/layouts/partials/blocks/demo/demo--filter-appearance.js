// Switch the displayed icon
function switchIcon() {
  // The ID of the SVG holding path elements for all available icons
  const svgID = "all-icon-options";
  const svg = document.getElementById(svgID);
  if(svg){
    // get all paths
    var paths = svg.querySelectorAll("path");
    var num = paths.length;
    
    // The icon of the index to show (random number)
    var indexToShow = Math.round(Math.random() * num);
    
    // Hide all the paths
    paths.forEach(
      function(path, index){
        path.setAttribute("style", "display:none");
      }
    );
    
    // Show one path
    paths.item(indexToShow).setAttribute("style", "display:block");
    
  }
}
