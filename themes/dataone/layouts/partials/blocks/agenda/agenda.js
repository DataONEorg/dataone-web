{{- $site := . -}}
{{- $p := $site.Params.prefix -}}
{{- $bn := print $p "agenda" -}}

/**
 * {{ $bn }} - Functions for the nav block: show/hide submenus, show login info, etc.
 */ 
(function( {{ $bn }}, undefined ) {
  
  var block = {{ $bn }};

  /**  
   * print the agenda when a button is clicked
   *    
   * @param  {type} id unique ID for the agenda element 
   */   
  block.print = function(id, title){
    
    if(!title){
      title = "Agenda"
    }
    
    var mywindow = window.open('', 'PRINT');
    var copiedDoc = document.getElementById(id).parentNode.cloneNode(true);
    copiedDoc.querySelector('#print-button-' + id).remove();

    mywindow.document.write(
      '<!DOCTYPE html><html><head>' + 
      document.head.innerHTML +
      '</head>'  + 
      '<body>' + 
      '<section class="section" style="background-color:white">' +
      '<div class="section__inner">' +
      '<h2 class="section__title markdown">' + title +'</h2>' +
      copiedDoc.innerHTML +
      '</div></section></body></html>'
    );
    
    setTimeout(function () {
      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/
      mywindow.print();
      mywindow.close();
    }, 90);
    

    return true;
  }
  
}( window.{{ $bn }} = window.{{ $bn }} || {} ));
