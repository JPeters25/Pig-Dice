//Business logic------------------------------------------


// function diceRoll (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

function diceRoll() {
  this.p1Total = 0
  this.p2Total = 0;
  this.p1Roll = 0;
  this.p2Roll = 0;
}

let newPlayer = new diceRoll(0,0);
let newPlayer2 = new diceRoll(0,0);

diceRoll.prototype.GetRoll = function(max) {
  this.p1Roll = Math.ceil(Math.random() * 6);
}

diceRoll.prototype.AddRoll = function() {
  if (this.p1Roll != 1){
    this.p1Total += this.p1Roll;
  } else {

  }
}

  // diceRoll(1, 6)

//UI Logic-------------------------------------------------
$(document).ready(function() {
  $("form#pigGame1").submit(function(event){
  event.preventDefault();
  newPlayer.GetRoll();
  newPlayer.AddRoll();
  $("#p1Total").text(newPlayer.p1Total);
  });
  // $("form#pigGame2").submit(function(event){
  // event.preventDefault();
  // $("#p2Roll").text(diceRoll(1,6));
  // });
});

$(document).ready(function () {
  $("button#hide-score").click(function(event){
    event.preventDefault();
    $("#p1Total").text("");
    $("#p2Total").text("");
  });
});