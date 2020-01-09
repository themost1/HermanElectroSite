syncBannerLoc = function() {
	/*var img = document.getElementById("banner");

    var bodyHeight  = parseInt(getComputedStyle(document.body).height, 10) * 2;
    var scrollLimit = bodyHeight - window.innerHeight;
    var scrollTop   = document.body.scrollTop;
    var scrollPCT   = (scrollTop / (scrollLimit/100)) / 100;
	var offsetHeight = 50;
    img.style.top   = bodyHeight * scrollPCT - offsetHeight + "px";*/
	var img = document.getElementById("banner");
	var scrollTop   = document.body.scrollTop;
	img.style.top = scrollTop/2;
}

window.onload = function() {
	document.getElementById("mushroom").onclick = function() {mushroomMode()};
}

window.onscroll = function() {
	var img = document.getElementById("banner");
	syncBannerLoc();
}

var colorMarker = 0;
var colorInterval;

function mushroomMode() {
	if (colorMarker <= 0) {
		colorMarker = 1;
		colorInterval = setInterval(changeColor, 10);
	}
	else {
		clearInterval(colorInterval);
		colorMarker = 0;
		document.body.style.background = "black";
	}
}

function changeColor() {
	var x, y, z;
	colorMarker++;
	
	x = Math.min(colorMarker % 256, 256-colorMarker%256);
	y = Math.min ( (colorMarker + 80) % 256, 256-(colorMarker + 80) % 256);
	z = Math.min ( (colorMarker + 160) % 256, 256-(colorMarker + 160) % 256);
	
	var color = "rgb(" + x + "," + y + "," + z + ")";
	document.body.style.background = color;
}