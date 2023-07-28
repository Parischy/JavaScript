/*
Does a Number Exist?
validStrNumber("324") ➞ true
validStrNumber("54..4") ➞ false
*/
function validStrNumber(n) {
	if ( isNaN(n) ) {
		return false;
	} else {
		return true;
	}
}

/*
Array of Word Lengths
wordLengths(["hello", "world"]) ➞ [5, 5]
*/
function wordLengths(arr) {
	return arr.map(arr => (arr.length));
}

/*
Nth Even Number
nthEven(1) ➞ 0
// 0 is first even number
*/
function nthEven(n) {
	if ( n == 1 ) {
		return 0;
	} else {
		return ( n - 1 ) * 2;
	}
}

/*
String or Integer?
intOrString(8) ➞ "int"
intOrString("Hello") ➞ "str"
*/
function intOrString(param) {
	if ( typeof(param) == "number" ) {
		return "int";
	} else {
		return "str";
	}
}

/*
Spaces Between Each Character
spaceMeOut("space") ➞ "s p a c e"
*/
function spaceMeOut(str) {
	return str.split('').join(' ')
}




