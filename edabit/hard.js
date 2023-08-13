//Seven Boom!
function sevenBoom(arr) {
	if (arr.toString().match("7")) {
    return "Boom!";
  }
  return "there is no 7 in the array";
}

//Tower of Hanoi
function towerHanoi(discs) {
	if (discs <= 0) {
    return 0;
  } else {
    return 2 * towerHanoi(discs - 1) + 1;
  }
}

//How Many Days Between Two Dates
function getDays(date1, date2) {
	let day = 24 * 60 * 60 * 1000;
  let milliseconds = Math.abs(date2 - date1);
  let result = Math.floor(milliseconds / day);
  return result;
}

/*
Basic Calculator
calculator(2, "+", 2) ➞ 4
*/
function calculator(num1, operator, num2) {
	if (operator == "/" && num2 == 0) {
    return "Can't divide by 0!"
  }
  return eval(num1 + operator + num2)
}

