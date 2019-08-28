
window.onload = function() {
	document.getElementById("mushroom").onclick = function() {mushroomMode()};
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
		document.body.style.background = "rgb(30, 30, 30)";
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