//Business logic------------------------------------------
function diceRoll (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  // diceRoll(1, 6)

//UI Logic-------------------------------------------------
$(document).ready(function() {
  $("form#pigGame1").submit(function(event){
  event.preventDefault();
  $("#p1Score").html(diceRoll(1,6));
  });
  $("form#pigGame2").submit(function(event){
  event.preventDefault();
  $("#p2Score").html(diceRoll(1,6));
  });
});