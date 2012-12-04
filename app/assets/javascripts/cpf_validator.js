window.CpfValidator = function (number) {
  this.number = number;

  this.isValid = function () {
    return digitsMatches();
  }

  function digitsMatches() {
    return digitMatches(9) && digitMatches(10);
  }

  function digitMatches(digit) {
    var sum = 0,
        digits = getDigits();

    for (var i = 0; i < digit; i++) {
      sum += digits[i] * (digit + 1 - i);
    }

    result = sum % 11;
    if (result < 2) {
      result = 0;
    } else {
      result = 11 - result;
    }

    return result == digits[digit];
  }

  function getDigits() {
    //var n = number.replace(/\D/g, '');

    return number.match(/\d/gi);
  }
}
