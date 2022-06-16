//Business logic------------------------------------------
function diceRoll() {
  this.Total = 0;
  this.Roll = 0;
}

let newPlayer = new diceRoll(0,0);
let newPlayer2 = new diceRoll(0,0);

diceRoll.prototype.GetRoll = function(max) {
  this.Roll = Math.ceil(Math.random() * 6);
}

diceRoll.prototype.AddRoll = function() {
  if (this.Roll != 1){
    this.Total += this.Roll;
  } else {
    this.Total = this.Total;
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
  $("#p1Total").text(newPlayer.Total);
  });

  $("#player-two-roll").click(function(event){
  event.preventDefault();
  newPlayer2.GetRoll();
  newPlayer2.AddRoll();
  $('#p2Roll').text(newPlayer2.Roll)
  $("#p2Total").text(newPlayer2.Total);
  });


  $("button#test").click(function(event){
    event.preventDefault();
    $("#p1Total").text("");
    $("#p2Total").text("");
    $("#p1Roll").text("");
    $("#p2Roll").text("");
  });
});