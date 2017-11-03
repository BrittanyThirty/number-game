// business logic
var devisibleByThree = function(number) {
  if (number % 3 === 0)
    return true;
  return false;
};

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
  $("img").click(function() {
    $(".clickable").fadeToggle();
  });
  $("#sorting").click(function() {
    $("#map").fadeToggle();
  });
  $("form#number-game").submit(function(event) {
    event.preventDefault();

    var numberIntBig = parseInt($("#number").val());
    var result1 = devisibleByThree(numberIntBig);
    var result2 = numberContainingOneString(numberIntBig);
    var result3 = numberContainingZeroString(numberIntBig);

    $("form#number-game").each(function() {
      this.reset();
    });

    $(".resultDisplay").hide();

    if (result1 === true && result2 === true && result3 === true) {
      $("#numberContainingZeroOneDThree").show();//102
    }
    else if (result1 === true && result2 === true && result3 === false) {
      $("#numberContainingOneDThree").show();//12
    }
    else if (result1 === true && result2 === false && result3 === true) {
      $("#numberContainingZeroDThree").show();//30
    }
    else if (result1 === true && result2 === false && result3 === false) {
      $("#numberDivisibleByThree").show();//27
    }
    else if (result1 ===false && result2 === true && result3 === true) {
      $("#numberContainingOneZero").show();//10
    }
    else if (result1 ===false && result2 === true && result3 === false) {
      $("#numberContainingOne").show();//14
    }
    else if (result1 ===false && result2 === false && result3 === true) {
      $("#numberContainingZero").show();//20
    }
    else if (result1 ===false && result2 === false && result3 === false) {
      var numbersString = "";
      for (index = 0; index <= numberIntBig; index += 1) {
          numbersString = numbersString.concat(index.toString() + ". ");
      }
      $("#numberItself").show();
      $(".numberItself").text(numbersString);
      //23
    }
    else {
      alert("Please enter a number")
    }

});
});
