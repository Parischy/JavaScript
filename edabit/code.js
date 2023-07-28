// Navy blue walls
function howManyWalls(n, w, h) {
	let sum = n / ( w * h );
	if ( sum >= 1 ) {
		return Math.round(sum);
	} else {
		return 0;
	}
}

// LeapYear
function leapYear(year) {
	return ( year % 4 == 0 ) ? true : false;
}

// Return the Last Element in an Array
function getLastItem(arr) {
	return arr.pop();
}

// Among Us Imposter Formula
function imposterFormula(i, p) {
	let sum = 100 * ( i / p );
	return Math.round(sum) + "%";
}

// Name Greeting!
const helloName = name => {
	return `Hello ${name}!`;
}

// To the Power of _____
function calculateExponent(num, exp) {
	return Math.pow(num, exp);
}

// Flip the Boolean
function flipBool(b) {
	if ( b >= 1 && b == true ) {
		return 0;
	} else {
		return 1;
	}
}

// Convert an Array to a String
function arrayToString(arr) {
	return arr.join('');
}

// Word Numbers!
function word(s) {
	switch (s) {
		case "one":
			return 1;
			break;
		case "two":
			return 2;
			break;
		case "three":
			return 3;
			break;
		case "four":
			return 4;
			break;
		case "five":
			return 5;
			break;
		case "six":
			return 6;
			break;
		case "seven":
			return 7;
			break;
		case "eight":
			return 8;
			break;
		case "nine":
			return 9;
			break;
		default:
			return 0;
	}
}

// Moving House
function yearsInOneHouse(age, moves) {
	let sum = age / ( moves + 1 )
	if ( moves > 0 ) {
		return Math.round(sum);
	} else {
		return age;
	}
}

// Many Operators!
function operate(num1, num2, operator) {
	return eval(num1 + operator + num2);
}

// Word without First Character
function newWord(str) {
	return str.substring(1);
}

// Concatenating Two Integer Arrays
function concat(arr1, arr2) {
	return arr1.concat(arr2);
}

// Find the Index
function findIndex(arr, str) {
	return arr.indexOf(str);
}

// Find the Index (Part 1)
function search(arr, item) {
	if ( arr.indexOf(item) >= 0 ) {
		return arr.indexOf(item);
	} else {
		return -1;
	}
}

// Is the Last Character an "N"?
function isLastCharacterN(word) {
	return word.endsWith("n");
}

// Count the Arguments
function numArgs() {
	return arguments.length;
}

// Find the Bug: Returning the Container
function getContainer(product) {
	let container;
  switch (product) {
		case "Bread":
			container = "bag"
			break;
		case "Beer":
		case "Milk":
			container = "bottle"
			break;
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
			break;
		default:
			container = null;
	}
	return container;
}

// Recreating the abs() Function
function absolute(n) {
	if ( n < 0 ) {
		let sum = -1 * n;
		return sum;
	} else {
		return n;
	}
}

// On/Off Switches
function posCom(num) {
	return 2 ** num;
}

// Drop the First Elements of an Array
function drop(arr, val = 1) {
	return arr.slice(val);
}

function sumArray(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
  return sum;
}

// Check String for Spaces
function hasSpaces(str) {
	return str.includes(" ")
}

// Ternary Operator
function areTrue(a, b) {
	if (a && b) return "both"
  if (a) return "first"
  if (b) return "second"
  return "neither"
}

/*
arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]
*/
function arrayValuesTypes(arr) {
	return arr.map(item => (typeof(item))); 
}

/*
Triangle and Parallelogram Area Finder
areaShape(2, 3, "triangle") ➞ 3
*/
function areaShape(base, height, shape) {
	if ( shape == "triangle" ) {
		return 0.5 * base * height;
	} else {
		return base * height;
	}
}

/*
Check if an Array Contains a Given Number
check([1, 2, 3, 4, 5], 3) ➞ true
*/
function check(arr, el) {
	return arr.includes(el) ? true : false;
}

function drop(arr, val = 1) {
    return arr.slice(val);
}