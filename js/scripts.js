

//   number = Math.floor(number / 10);
// }

var luckyNumber = function(number) {
  if (number % 3 === 0) {
    return true;
  }
  // else if (number / 10 === 1){
  //   console.log("true");
  //   return
  // }
  // else if (number / 10 === 0){
  //   console.log("true");
  //   return
  // }
  else {
  return false;
}
};

// user interface logic

$(document).ready(function() {
  $("form#lucky-number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = luckyNumber(number);
    $("#numberItself").text(result);

    if (result === true) {
    $("#numberDivisibleByThree").show();
  }
    // else if (result === ) {
    //   $("#numberContainingOne").show();
    // }
    // else if (result === ) {
    //   $("#numberContainingZero").show();
    // }
    else {
      $("#numberItself").show();
  }
});
});
