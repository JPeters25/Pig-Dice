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
    this.Total += this.CurrentRoll;
    newPlayer.CurrentRoll = 0;
    newPlayer2.CurrentRoll = 0;
}

diceRoll.prototype.Reset = function() {
  this.total = this.total;
  newPlayer.Total = 0
  newPlayer2.Total = 0
}

diceRoll.prototype.GameWinner = function() {
  if (p1Total === 10){
    return "Player One Wins";
  } else if (p2Total === 10){
    return "Player Two Wins";
  } else{
    return "Try again"
  }
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

  $("#player-one-hold").click(function(event){
    event.preventDefault();
    newPlayer.GameTotal();
    $("#p1Total").text(newPlayer.Total)
  })

  $("#player-two-hold").click(function(event){
    event.preventDefault();
    newPlayer2.GameTotal();
    $("#p2Total").text(newPlayer2.Total)
  })


  $("button#test").click(function(event) {
    event.preventDefault();
    newPlayer.Reset();
    newPlayer2.Reset();
    $("#p1Current").text("");
    $("#p2Current").text("");
    $("#p1Roll").text("");
    $("#p2Roll").text("");
    $("#p1Total").text("");
    $("#p2Total").text("");
  });

  $("button#winner").click(function(event){
    event.preventDefault();
    $("winner").html()

  })
});
