var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function randomize() {
	var string = "";
	var charList = "ABCDEF0123456789";
	for (var i = 0; i < 6; i++) {
		string += charList.charAt(Math.floor(Math.random() * charList.length));
	}
	return "#" + string;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", function(){
	color1.value = randomize();
	color2.value = randomize();
	setGradient();
});

setGradient();
