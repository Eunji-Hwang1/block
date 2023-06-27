console.log("Script loaded");

var mainLoopInterval;

//STANDARD FUNCTIONS ===================================================================



//print text in the option box
function print(text1, text2)
{
	var element = document.getElementById("ArraySpace_id");
	var newDiv = document.createElement("div");
	
	var combinedText = text1;
	if (text2 != undefined) combinedText = text1 + " " + text2;
	else{combinedText = text1+" "}
	newDiv.innerHTML = combinedText;
	newDiv.setAttribute("class", "workingText");
	element.appendChild(newDiv);	
}

function getRandom(range)
{
	return Math.floor(Math.random() * range) + 1;
	
}

//clear whole things at once///
function clearArraySpace(){
	const element= document.getElementById("ArraySpace_id");
	element.textContent = " ";
}
function clearAll(){
	const element = document.getElementById("workingSpace_id");
	element.textContent = " ";
	clearArraySpace();
}
////////////////////////////////



//SIMPLE BLOCK FUNCTIONS ===================================================================

function addBlock(color, innerText){
	
	const DOMGrid = document.getElementById("workingSpace_id");
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "block");
	newDiv.setAttribute("style", "background-color: " + color);
	if (innerText != undefined){
		newDiv.innerHTML = innerText;
	}
	
	DOMGrid.appendChild(newDiv);
}

function deleteBlock(innerText){
	const DOMGrid = document.getElementById("workingSpace_id");
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "block");
	newDiv.setAttribute("style", "background-color: ");
	if (innerText != undefined){
		newDiv.innerHTML = innerText;
	}
	
	DOMGrid.appendChild(newDiv);
}

//COMPLEX BLOCK FUNCTIONS ===================================================================

function drawBlockAtXY(xPos, yPos, color, innerText){
	const DOMGrid = document.getElementById("workingSpace_id");
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "block");
	newDiv.setAttribute("style", "background-color: " + color);
	if (innerText != undefined){
		newDiv.innerHTML = innerText;
	}
	if (xPos != undefined && yPos != undefined){
			newDiv.setAttribute("id", "X" + xPos + "Y" + yPos);
	}
	
	DOMGrid.appendChild(newDiv);
}

function changeBlockColorAtXY(color, xPos, yPos){
	
	const blockElement = document.getElementById("X" + xPos + "Y" + yPos);
	
	if (blockElement != undefined){
		blockElement.setAttribute("style", "background-color: " + color);
	}
	
}

function deleteBlockAtXY(xPos, yPos){
	
	const blockElement = document.getElementById("X" + xPos + "Y" + yPos);
	
	if (blockElement != undefined){
		blockElement.remove();
	}
	
}

function createBlankGrid(displayPos){
	
	let innerText = "";
	
	clearAll();
	
	for (var y = 0; y < 20; y++){
		for (var x = 0; x < 20; x++){
			if (displayPos) innerText = x + "," + y;
			drawBlockAtXY(x,y, "white", innerText);			
		}
		
	}
}

//store the image from the file
function loadImage(filename){
	const imageBox = document.getElementById("imageBox");
	imageBox.setAttribute("src", filename);
}

//MAIN LOOP FUNCTION ===================================================================

function startMain(mainFunction, milliseconds){
	if (mainLoopInterval == undefined) mainLoopInterval = setInterval(mainFunction, milliseconds);
}

function stopMain(){
	clearInterval(mainLoopInterval);
	mainLoopInterval = undefined;
	console.log(spaceArray);
}

//let input box store the input text
function answerInput(){
	const inputBox = document.getElementById("inputBox");
	let text = inputBox.value;
	alert(text);
	//Clear text
	inputBox.value = "";
	return text;
}
