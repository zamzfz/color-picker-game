var color = generateRandomColor(6);
var square = document.querySelectorAll(".square");
var pickedColor = color[pickColor()];
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");

colorDisplay.textContent = pickedColor;

for (var i = 0 ; i < square.length ; i++) {
	
	square[i].style.background = color[i];

	square[i].addEventListener("click",function() {
		var clickedColor = this.style.background;

		if (clickedColor === pickedColor){
			alert("Correct !");
			message.textContent = "Correct !"
			changeColor(clickedColor);
			h1Display.style.background = pickedColor;
			resetButton.textContent = "Play Again ?";
		}else{
			this.style.background = "#232323";
			message.textContent = "Try Again !"
		}
	})

}

btnEasy.addEventListener("click",function() {
	// body...
	btnHard.classList.remove("selected");
	btnEasy.classList.add("selected");
	color = generateRandomColor(3);
	pickedColor = color[pickColor()];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		// check if color[i] is exist
		if (color[i]){
			square[i].style.background = color[i];
		}else{
			square[i].style.display = "none";
		}
	}
})
btnHard.addEventListener("click",function() {
	// body...
	btnEasy.classList.remove("selected");
	btnHard.classList.add("selected");
	color = generateRandomColor(6);
	pickedColor = color[pickColor()];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		// check if color[i] is exist
		square[i].style.background = color[i];
		square[i].style.display = "block";
	}
})

resetButton.addEventListener("click", reset);

function reset() {
	// body...
	color = generateRandomColor(6);

	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color[i];
	}
	message.textContent ="";
	resetButton.textContent ="New Colors";
	pickedColor = color[pickColor()];
	colorDisplay.textContent = pickedColor;
	h1Display.style.background = "steelblue";
}

function changeColor(color) {

	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor() {
	
	return Math.floor(Math.random() * color.length)
}

function randomColor() {

	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var result = "rgb("+red+", "+green+", "+blue+")";
	return result;
}

function generateRandomColor(num) {
	var color = [];
	for (var i = 0; i < num; i++) {
		color.push(randomColor());	
	}
	return color;
}