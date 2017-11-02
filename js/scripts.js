// business logic
var devisibleByThree = function(number) {
  if (number % 3 === 0)
    return true;
  return false;
};
// var stringNumber = number.toString();
// var numberContainingOne = function(number) {
//   if (number % 10 === 1) {
//     return true;
//   }
//   else {
//   return false;
// }
// };
// var numberContainingZero = function(number) {
//   if (number % 10 === 0) {
//     return true;
//   }
//   else {
//   return false;
// }
// };

var numberContainingOneString = function(numberInt) {
    var numberString = numberInt.toString();
    if (numberString.includes("1"))
      return true;
    return false;
}

var numberContainingZeroString = function(numberInt) {
    var numberString = numberInt.toString();
    if (numberString.includes("0"))
      return true;
    return false;
}

// user interface logic
$(document).ready(function() {
  $("form#number-game").submit(function(event) {
    event.preventDefault();

    //var number = parseInt($("#number").val());

    //var result1 = devisibleByThree(number);
    //var result2 = numberContainingOne(number);
    //var result3 = numberContainingZero(number);

    var numberIntBig = parseInt($("#number").val());
    var result1 = devisibleByThree(numberIntBig);
    var result2 = numberContainingOneString(numberIntBig);
    var result3 = numberContainingZeroString(numberIntBig);

    $("form#number-game").each(function() {
      this.reset();
    });

    // hide all the potential results with class name resultDisplay
    $(".resultDisplay").hide();

    if (result1 === true && result2 === true && result3 === true) {
      $("#numberContainingZeroOneDThree").show();
    }
    else if (result1 === true && result2 === true && result3 === false) {
      $("#numberContainingOneDThree").show();
    }
    else if (result3 === true && result2 === false && result3 === true) {
      $("#numberContainingZeroDThree").show();
    }
    else if (result3 ===false && result2 === true && result3 === true) {
      $("#numberContainingOneZero").show();
    }
    else if (result3 ===false && result2 === true && result3 === false) {
      $("#numberContainingOne").show();
    }
    else if (result3 ===false && result2 === false && result3 === true) {
      $("#numberContainingZero").show();
    }
    else {
      var numbersString = "";
      for (index = 0; index <= numberIntBig; index += 1) {
          //numbersString = numbersString.concat(index + ",");
          numbersString = numbersString.concat(index.toString() + ", ");
      }
      $("#numberItself").text(numbersString);
      $("#numberItself").show();
    }
});
});
