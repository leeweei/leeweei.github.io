$(".menu").mousedown(function(){
	$(this).toggleClass("closed");

	if($(this).hasClass("closed")) {
		$(".logo.button").text("Menu");
	} else {
		$(".logo.button").text("Close");
	}
})
