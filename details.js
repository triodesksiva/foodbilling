$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "https://59d9fddeea46390012409455.mockapi.io/billing",
		dataType: "json",
		success: function(result) {
			var txt = "";
			for(i = 0; i < result.length; i++) {
				txt += "<tr><td>" + result[i].items + "</td><td>" + result[i].price + "</td></tr>";

			}
			$("#bodyin").html(txt);
		}
	})
});