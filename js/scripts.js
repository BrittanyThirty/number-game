// business logic
var devisibleByThree = function(number) {
  if (number % 3 === 0) {
    return true;
  }
  else {
  return false;
}
};
// var containingOne = function(number) {
//   while (number > 0) {
//     if (number % 10 === 1) {
//       return true;
//     }
//     number = Math.floor(number / 10 );
//   }
//   else {
//   return false;
//   }
// };
// var containingZero = function(number) {
//   while (number > 0) {
//     if (number % 10 === 0) {
//       return true;
//     }
//     number = Math.floor(number / 10 );
//   }
//   else {
//   return false;
// }
// };
// user interface logic
$(document).ready(function() {
  $("form#number-game").submit(function(event) {
    event.preventDefault();
    // var numberItselfInput = $("#numberItself").val();
    // $(".numberItself").text(nunberItselfInput);
    var number = parseInt($("#number").val());
    var result = devisibleByThree(number);
    // $("#numberItself").text(result);
    // var result2 = containingOne(number);
    // $("#numberContainingOne").text(result2);
    // var result3 = containingZero(number);
    // $("#numberContainingZero").text(result3);

    if (result === true) {
    $("#numberDivisibleByThree").show();
  }
    // else if (result2 === true) {
    //   $("#numberContainingOne").show();
    // }
    // else if (result3 === true) {
    //   $("#numberContainingZero").show();
    // }
    else {
      $("#numberItself").show();
  }

});
});
