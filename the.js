$(function(){
	function AYUWAWA(){


		alert("AYUWAWA");
		while(true){
			var y = "AYUWAWA";
			var x = x + y; 
			$("p").html(x);	
		}

	}
	
	$("button.the").on("click",(function(){AYUWAWA();});
});