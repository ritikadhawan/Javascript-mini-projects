var slidder = document.getElementById("btn");
var isToggle = false;
var b = document.getElementsByTagName("body")[0];

function toggle()
{

	console.log("Clicked");
	if(isToggle)
	{
		toggleWhite();
		isToggle = false;
	}
	else
	{
		toggleBlack();
		isToggle = true;
	}


}
function toggleBlack(){
    	/
		document.getElementsByClassName("circle")[0].classList.add("toggleCircle");
		document.getElementsByClassName("oval")[0].classList.add("toggleOval");
		document.getElementsByTagName("body")[0].classList.add("toggleBack");

}
function toggleWhite(){
   	document.getElementsByClassName("circle")[0].classList.remove("toggleCircle");
	document.getElementsByClassName("oval")[0].classList.remove("toggleOval");
	document.getElementsByTagName("body")[0].classList.remove("toggleBack");
}


