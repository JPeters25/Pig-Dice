//Business logic------------------------------------------
function diceRoll (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  if (diceRoll === 1) {

  }

  // diceRoll(1, 6)

//UI Logic-------------------------------------------------
$(document).ready(function() {
  $("form#pigGame1").submit(function(event){
  event.preventDefault();
  $("#p1Roll").text(diceRoll(1,6));
  });
  $("form#pigGame2").submit(function(event){
  event.preventDefault();
  $("#p2Roll").text(diceRoll(1,6));
  });
});

$(document).ready(function () {
  $("button#hide-score").click(function(event){
    event.preventDefault();
    $("#p1Round").text("");
    $("#p2Round").text("");
  });
});