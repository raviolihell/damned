var array = ["satann", "Drizzy", "macbeth", "badonkadonk", "Slime Jr.", "Skeletor"];

var randInt = randomGenerator(0, array.length - 1);

var item = array[randInt];

var textbox = document.getElementById("textbox_id").value = randInt;
