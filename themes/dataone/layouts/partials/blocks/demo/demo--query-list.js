// Filter the list of query-able metadata fields
function filterQueryFields(input) {
  // Declare variables
  var searchTerm, ul, li, i, fieldName, fieldDescription, txtValue;
  searchTerm = input.value.toUpperCase();
  ul = document.getElementById("queryFieldList");
  li = ul.getElementsByClassName('demo__item');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    // Get the displayed field name
    fieldName = li[i].textContent || li[i].innerText;
    // Get the field description, which is stored in the data-tooltip attr
    fieldDescription = li[i].getAttribute("data-tooltip") || "";
    // Combine them so they are both searchable
    var txtValue = fieldName + " " + fieldDescription;
    if (txtValue.toUpperCase().indexOf(searchTerm) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Remove any tooltips when the list scrolls
var list = document.getElementById("queryFieldList");
if(list){
  var delay = 0;
  list.addEventListener("scroll", function(e){
    // Remove aria label
    var labelledItem = list.querySelector("li[aria-describedby]");
    if(labelledItem){
      labelledItem.removeAttribute("aria-describedby");
    }
    // Remove tooltip
    var tooltip = document.querySelector(".tooltip");
    if(!tooltip) return;
    setTimeout(function() {
      document.body.removeChild(tooltip);
    }, delay);
  });
}
