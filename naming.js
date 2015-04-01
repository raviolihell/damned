  var msgArr = new Array();
	msgArr[0] = "UHHHH";
	msgArr[1] = "TESTING";
	msgArr[2] = "SATANNN"
	window.onload = function () {
		document.getElementById("msgDiv").innerHTML = msgArr[Math.floor(Math.random()*msgArr.length)];
	}
