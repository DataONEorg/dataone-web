function searchD1(){
  var searchURL = "https://search.dataone.org/data/query=" + document.getElementById("search-term").value;
  var form = document.querySelector(".d1search");
  form.action = searchURL;
};
