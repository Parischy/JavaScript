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

/*
Skip the Drinks with Too Much Sugar
skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
*/
function skipTooMuchSugarDrinks(drinks) {
	arr = [];
	for(let i in drinks ) {
		if ( drinks[i] != "cola" && drinks[i] != "fanta" ) {
				arr.push(drinks[i]);
		}
	}
    return arr;
}

/*
How Many D's Are There?
countDs("My friend Dylan got distracted in school.") ➞ 4
*/
function countDs(sentence) {
	arr = [];
	for ( let i = 0; i < sentence.length; i++ ) {
		if ( sentence[i] == "d" || sentence[i] == "D" ) {
			arr.push(sentence[i]);
		}
	}
	return arr.length;
}