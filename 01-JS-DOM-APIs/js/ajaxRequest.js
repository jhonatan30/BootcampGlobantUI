
$(document).ready(function(){
    $("#btn-joke").click(function(){
      testAjax();
  });
});

function testAjax() {
  $.ajax({
    url: "http://api.icndb.com/jokes/random",
    type: "GET",
    dataType:"json",
    success: function(data) { $("#joke").append(data.value.joke); },
    error: function() { alert( "Ha ocurrido un error" ); }
  });
}