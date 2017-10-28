var a = "";
var b = "";
var c = "";
var d = "";
var obj = "";
var total = "";
var gt = "";
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "https://59d9fddeea46390012409455.mockapi.io/billing",
		dataType: "json",
		success: function(result) {
			var txt = "";
			obj = result;
			for(i = 0; i < result.length; i++) {
				txt += "<option>" + result[i].items + "</option>";
			}
			$("#selection").html(txt);
		}
	})
	

$("#selection").change(function() {
	a = $("select").val();
	console.log(a);
});
$("button").click(function() {
	b = $("#quantity").val();
	console.log(b);
	
	 for(var i = 0; i < obj.length; i++) {
	 	if(obj[i].items === a) {
	 		c = obj[i].price;
	 		console.log(c);
	 	}
	 }
	 total = b * c;
	 console.log(total);
	
	 $("#bodyin").append("<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + total + "</td></tr>");
     gt = eval(gt + total);
     $("#grandtotal").html(gt);
  });
    
});