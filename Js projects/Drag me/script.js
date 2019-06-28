document.documentElement.addEventListener('click',drag);
var ball = document.getElementById("ball");
var timeI = 1;
function drag(event){
  console.log("event occured");
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  console.log(mouseX,mouseY);
  // var delL = Math.abs(mouseX - ball.offsetLeft);
  // var delT = Math.abs(mouseY - ball.offsetTop);
  // console.log(Math.abs(delL-delT),"hello");
  // if(Math.abs(delL-delT)<=300)
  //   timeI = 1;
  // else
  //   timeI = 100;
  toDo(mouseY,mouseX);
}
var id ;
function toDo(finalTop,finalLeft){
  console.log("function1 Called");
  //ball.style.transform = "translate(finalLeft px,finalTop px)";
  // ball.style.setProperty = ('x',finalLeft);
  // ball.style.setProperty = ('y',finalTop);
//  ball.style.transform = "translate(100px,100px)";
  id = setInterval(function() { sendToDesti(finalTop,finalLeft,id);},timeI);
}
function sendToDesti(finalTop,finalLeft,id)
{
	var intialTop=ball.offsetTop;
	var intialLeft=ball.offsetLeft;
  var stepL = 2;
  var stepT = (Math.abs(finalTop-intialTop)/Math.abs(finalLeft-intialLeft))*stepL;
  if(stepT < 2)
  {
    stepT = 2;
    stepL = (Math.abs(finalLeft-intialLeft)/Math.abs(finalTop-intialTop))*stepL;
  }
	console.log("fuction2 called");
if(intialTop == finalTop && intialLeft == finalLeft)
	{
				clearInterval(id);
				return;
	}

	if(intialLeft<finalLeft)
		{
			if(intialLeft+stepL<=finalLeft)
				intialLeft+=stepL;
			else
				intialLeft = finalLeft;

		}
	else{
		if(intialLeft-stepL>=finalLeft)
			intialLeft-=stepL;
		else
			intialLeft = finalLeft;
	}


	if(intialTop<finalTop)
		{
			if(intialTop+stepT<=finalTop)
				intialTop+=stepT;
			else
				intialTop = finalTop;
		}
	else
	{
		if(intialTop-stepT>=finalTop)
			intialTop-=stepT;
		else
			intialTop = finalTop;
	}
	ball.style.left = intialLeft + "px";
	ball.style.top = intialTop + "px";

	console.log(intialTop,intialLeft);
	console.log(ball.offsetTop);
	console.log(ball.offsetLeft);



}
