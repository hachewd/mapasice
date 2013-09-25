
	$(document).ready(OnReady);
	function OnReady(){
		$('body').append('<div class="shadow" id="sombra" onclick="cerrarhache()"></div>');
		$('body').append('<div class="windowHache"></div>');
	}
	function windowHache(url,color){
		var media = $(window).width() / 2;
		var bordercolor =  "solid 4px " + color;
		var pos = media - ($('.windowHache').width() / 2);
		$('.windowHache').html('<a href="#" id="cerrar" onclick="cerrarhache()"></a><iframe src="'+url+'"></iframe>');
		$('.windowHache').css({"visibility": "visible","left": pos, "border": bordercolor,"opacity": "1"});
		$('.shadow').css({"visibility": "visible","opacity": "0.5"});
	}
	function cerrarhache(){
		$('.windowHache').css({"visibility": "hidden","opacity": "0"});
		$('.shadow').css({"visibility": "hidden","opacity": "0"});
	}