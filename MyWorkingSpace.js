//Name: Hwang Eunji and Kim Daeun
//Date:  2022-11-12
//Assignment: Guess the image! 

// Block's color
let colorArray=["Deeppink",
"Fuchsia",
"Hotpink",
"Lightpink",
"Palevioletred",
"Pink",
"Plum",
"Skyblue",
"Powderblue",
"Lightskyblue",
"Lightblue",
"Deepskyblue",
"Darkturquoise",
"Cornflowerblue",
"Paleturquoise"];

//Array for show the color of addRandomColorBlock's blocks
let blockArray = [];

//Add one of block that has each color one of colorArray
function addRandomColorBlock() {
	console.log("addRandomColorBlock clicked");
	i=getRandom(15);
	color=colorArray[i-1];
	blockArray.push(color);
	addBlock(color);
	console.log(blockArray)
}

//Save color patterns made from click Fill Line with Block button
var lineArray=[];

//This function is make a line of random color blocks
function makeLineArray(){
	for(var i=0; i<15; i++)
	{
		c=getRandom(15);
		color=colorArray[c-1];
		lineArray.push(color);
		addBlock(color);
	}
	console.log(lineArray);
	return lineArray.slice();
}

//Bring the makeLineArray and run when press the Fill Line with Block
function addOneLineColorBlock() {
	console.log("FillOneLineWithBlocks");
	return makeLineArray()
}

//Save color patterns made from click Fill Space with Blocks
var spaceArray=[];
var spaceColorArray=[];
//var newSpaceArray=[];

//Add seats number and make random color blocks for Fill Space
function makeSpaceArray(){
	for(y=0; y<15; y++)
	{	
		spaceArray.push([]);
		for(x=0; x<15; x++)
		{
			c=getRandom(15);
			color=colorArray[c-1];
			spaceArray[y].push(color);
			spaceColorArray.push(color);
			drawBlockAtXY(x,y,color);
		}
		
	}
	
	console.log(spaceColorArray);
}

//Bring the makeSpaceArray and run when press the Fill Line with Block
function createAndDrawBlockArray(){
	console.log("FillSpaceWithBlocks clicked");
	makeSpaceArray();
	
}

//Print one of nested array for showing multiple choice answers
function answer(number)
{
	let answerArray=[ 
		["Pink Kitty", "Blue Kitty", "Purple Kitty", "Red Kitty", "Yellow Kitty"],
		["Mickey Mouse", "Minnie Mouse", "Donald Duck", "Goofy Goof", "Pluto"],
		["Elsa", "Snow White", "Cinderella", "Rapunzel", "Ariel"]
	]
	let printAnswerArray=[];
	for(y in answerArray[number])
	{
		printAnswerArray.push(`${parseInt(y)+1} : ${answerArray[number][y]}`);
	}
	return printAnswerArray;
}

//Change the background image
function ChangeImage(number)
{
	image=["HK.png","MM.png","elsa.jpg"]
	loadImage(image[number]);
	createAndDrawBlockArray();
	answertext=answer(number).join("</br>");
	print(answertext);
	
	

}

//Judge the answer entered inputBox
function SubmitAnswer(){
	let text = answerInput();
	let correct="You are Right! Please press \"Show the Answer\" and then if you want next question press\"Image\"button"
	let wrong="You are Wrong! Please press \"Show the Answer\" and then if you want next question press\"Image\"button"
	if(text=="Pink Kitty"){
		alert(correct);
	}
	else if(text=="Mickey Mouse"){
		alert(correct);
	}
	else if(text=="Elsa")
	{
		alert(correct);
	}
	else{alert(wrong);}
}

//Main Loop - This loop will be run untill the last soaceArray's element

//Delete first block and put the same color block of the end
function loop(dxp,dyp)
{
	console.log('Main loop running');
	moveBlock=spaceArray[dxp].shift();
	deleteBlockAtXY(dxp,dyp);
	drawBlockAtXY(dxp,dyp,moveBlock);
	spaceArray.push(moveBlock);
}

// function loopinnewSpaceArray(dxp,dyp)
// {
// 	moveBlock=newSpaceArray.shift();
// 	deleteBlockAtXY(dxp,dyp);
// 	drawBlockAtXY(dxp,dyp,moveBlock);
// 	newSpaceArray.push(moveBlock);
// }

//This intger make start from first block at the loop function
var dyp=0;
var dxp=0;

//Main loop function
function MainLoop()
{
	loop(dxp,dyp);
	dyp++;
	if(dyp==15)
	{
		dyp=0;
		dxp++;
	}
	if(dxp==15)
	{
		stopMain();
		// ndxp=0;
		// ndyp=0;
		// loopinnewSpaceArray(ndxp,ndyp);
		// ndxp++;
		// ndyp++;
	}
}

//Delete one block of the space in random
function aDeleteBlock()
{
	xp=getRandom(15)-1;
	yp=getRandom(15)-1;
	changeBlockColorAtXY(" ",xp,yp)
	console.log("Show the part of random!")
}