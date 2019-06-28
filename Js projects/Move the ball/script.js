var ball = document.getElementById("ball");
document.addEventListener("keydown",moveBall);
var left = 0 ,t = 0;

function moveBall(event)
{
	var elementW = ball.offsetWidth;
	var browserW = document.documentElement.clientWidth;
	var browserH = document.documentElement.clientHeight;


	var key = event.keyCode;
	if(key == 68 || key == 39) // to move right d
		{
			if(left+elementW+10<=browserW)
			{
				ball.style.left = left+10+"px";
				left +=10;
			}
			else {
				ball.style.left = browserW-elementW + "px";
			}

		}
	else if(key == 83|| key == 40) //to move down s
		{
			if(t+elementW+10<=browserH)
			{
				ball.style.top = t+10+"px";
				t+=10;
			}
			else {
				ball.style.top = browserH-elementW + "px";
			}

		}
	else if(key == 87 || key == 38) // to move up w
		{
			if(t-10>=0)
			{
				ball.style.top = t -10 + "px";
				t-=10;
			}

		}
	else if(key == 65 || key == 37) // to move left a
		{
			if(left-10>=0)
			{
				ball.style.left = left-10+"px";
				left-=10;
			}

		}
}
