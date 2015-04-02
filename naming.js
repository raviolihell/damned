var msgArr = new Array();
	msgArr[0] = "Message 1...";
	msgArr[1] = "Message 2...";
	msgArr[2] = "Message 3..."
	window.onload = function () {
		document.getElementById("msgDiv").innerHTML = msgArr[Math.floor(Math.random()*msgArr.length)];
	}
