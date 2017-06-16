//Business Logic

var player1="";
var player2="";

var rolldice = function () {
  return Math.floor(Math.random() *6+1);
};

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
   this.playerName="";

//Roll one
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("You rolled a 1" + this.playerName + ", You lose!")
};

}else{
  this.tempscore +=this.toss;
}
};


Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
alert(this.playerName +", your turn is over!");
};


Player.protoype.newGame=function(){
  this.toss=0;
  this.tempscore=0;
  this.totalscore=0;
  this.playerName="";
};

//User Interface

// check for 100
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
};


$(document).ready(function() {
