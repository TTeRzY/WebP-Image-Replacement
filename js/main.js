(function () {

	//Check if Browser is Chrome

	var isChromium = window.chrome;

	if(isChromium){


		//Get All Imgages and replace their extension - jpg/png/gif - to new img format WebP

		var getAnchors = $("img");

		for(var i=0; i < getAnchors.length; i++){
			getAnchors.attr("src",getAnchors[i].src.substr(0,getAnchors[i].src.lastIndexOf(".")) + ".webp");
		}

		$(".hidden-message").html("Your Browser is <b>Chrome</b>, script load WebP Images");

	}
	else{
		$(".hidden-message").html("Your Browser is not <b>Chrome/Opera</b>, script load default PNG Images");
	}

})();