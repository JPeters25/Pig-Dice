//Business logic------------------------------------------
function diceRoll() {
  this.Total = 0;
  this.Roll = 0;
  this.CurrentRoll = 0;
}

let newPlayer = new diceRoll(0,0);
let newPlayer2 = new diceRoll(0,0);

diceRoll.prototype.GetRoll = function(max) {
  this.Roll = Math.ceil(Math.random() * 6);
}

diceRoll.prototype.AddRoll = function() {
  if (this.Roll != 1){
    this.CurrentRoll += this.Roll;
  } else {
    this.CurrentRoll = 0;
  }
}

diceRoll.prototype.GameTotal = function() {
    
}




  // diceRoll(1, 6)

//UI Logic-------------------------------------------------
$(document).ready(function () {
  $("#player-one-roll").click(function(event){
  event.preventDefault();
  newPlayer.GetRoll();
  newPlayer.AddRoll();
  $('#p1Roll').text(newPlayer.Roll)
  $("#p1Current").text(newPlayer.CurrentRoll);
  });

  $("#player-two-roll").click(function(event){
  event.preventDefault();
  newPlayer2.GetRoll();
  newPlayer2.AddRoll();
  $('#p2Roll').text(newPlayer2.Roll)
  $("#p2Current").text(newPlayer2.CurrentRoll);
  });


  $("button#test").click(function(){
    event.preventDefault();
    $("#p1Current").text("");
    $("#p2Current").text("");
    $("#p1Roll").text("");
    $("#p2Roll").text("");
  });
});