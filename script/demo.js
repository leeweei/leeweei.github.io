
/*页面转换*/
$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "start"})
		// Line to '1' element
		.lineTo(200, 800, {name: "number1"})
		// Arc down and line to '2'
		.lineTo(100, 800, {name: "number2"})
		// Continue line to '3'
		.lineTo(100, 1600, {name: "number3"})
    // Continue line to '4'
		.lineTo(600, 1600, {name: "number4"})
		// Continue line to '5'
 		.lineTo(1000, 1600, {name: "number5"})
		// Continue line to '6'
 		.lineTo(1100, 1600, {name: "number6"})
		// Continue line to '7'
 		.lineTo(1600,1600, {name: "number7"})
		// Continue line to '8'
 	//	.lineTo(1400,1800, {name: "number8"})
		// Continue line to '9'
 		.lineTo(1800,2000, {name: "number9"})
		// Continue line to '10'
 	//	.lineTo(2000,2200, {name: "number10"})
		// Continue line to '11'
 		.lineTo(1800,2200, {name: "number11"})
		// Continue line to '12'
 		.lineTo(3300,2500, {name: "number12"})
		// Continue line to '13'
 		.lineTo(3300,2500, {name: "number13"})
		// Continue line to '14'
 		.lineTo(3320, 2500, {name: "number14"})
		// Continue line to '15'
 		.lineTo(3350, 2500, {name: "number15"})
		// Continue line to '16'
 		.lineTo(3400, 2500, {name: "number16"})
		// Continue line to '17'
 		.lineTo(3500, 2500, {name: "number17"})
		// Continue line to '18'
 		.lineTo(3600, 2500, {name: "number18"})
		// Continue line to '19'
 		.lineTo(3600, 2500, {name: "number19"})
		// Continue line to '20'
 		.lineTo(4400, 2500, {name: "number20"})
		// Arc down and line to '21'
		.lineTo(4400, 1800, {name: "number21"})
		// Arc down and line to '22'
		.arc(4400, 1400, 500, Math.PI/2, 0, true, {rotate: Math.PI/2 })
			 //写路径到 'rotations'
			 .lineTo(4400, 1400, {
					 name: "rotations"
			 })

			 // 继续画路径到 'source'
			 .lineTo(4400, 1400, {
					 name: "number22"
			 })


		// Arc down and line to '23'
		.lineTo(4400, 1400, {name: "number23"})
		// Arc down and line to '24'
		.lineTo(4400, 700, {name: "number24"})
		// Arc down and line to '25'
		.lineTo(4400, 600, {name: "number25"})
		// Arc down and line to '26'
		.lineTo(4400, 100, {name: "number26"})
		// Arc down and line to '27'
		// 旋转到位
		.rotate(1*Math.PI, {
				name: "rotations-rotated" })
		.lineTo(4000, 0, {name: "number27"})
		// Arc down and line to '28'
		.lineTo(3300, 0, {name: "number28"})
		// Arc down and line to '29'
		.lineTo(3300, -700, {name: "number29"})
		// Continue line to '30'
		.lineTo(3100, -700, {name: "number30"})
		// Continue line to '31'
		.lineTo(3000, -700, {name: "number31"})
		// Continue line to '32'
		.lineTo(2900, -700, {name: "number32"})
		// Continue line to '33'
		.lineTo(2500, -700, {name: "number33"})
		// Continue line to '34'
		.lineTo(2100, -700, {name: "number34"})
		// Continue line to '35'
		.lineTo(1700, -700, {name: "number35"})

		// Continue line to '36'
		.rotate(2*Math.PI, {
				name: "rotations-rotated" })
		.lineTo(1300, -700, {name: "number36"})
		// Continue line to '37'
		.lineTo(1300, -700, {name: "number37"})
		// Continue line to '38'
		.lineTo(1000, -700, {name: "number38"})
		// Continue line to '39'
		.lineTo(700, -700, {name: "number39"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();

			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	// $.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
	// 		function(data) {
	// 			if(data && data.count !== undefined) {
	// 				$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
	// 			}
	// 		});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
