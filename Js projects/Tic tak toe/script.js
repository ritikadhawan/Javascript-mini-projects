var cell = document.getElementsByClassName("cell");
var player1Sym = "x";
var player2Sym = "0";
var currentPlayer = "player1";
for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click',function(){
    markCell(cell[i],i);
    });
}
function markCell(currCell,index)
{
  console.log(index,currCell);
  var i = document.getElementsByClassName("fas fa-times")[index];

  if(currentPlayer == "player1")
  {
    i.style.display = "contents";
    currentPlayer = "player2";

  }
  else{
    currCell.style.innerText = "0";
    currentPlayer = "player1";

  }


}
function isWinning()
{

}
