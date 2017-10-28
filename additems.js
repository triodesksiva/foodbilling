$(document).ready(function(){
   $("#addbutton").click(function(){
   	  var additems = {
   	  	items: $("#additems").val(),
   	  	price: $("#price").val()
   	  }
   	  $.post("https://59d9fddeea46390012409455.mockapi.io/billing",additems,function(){
   	  	$("#additems").val(""),
   	  	$("#price").val("")
   	  });
   });
});