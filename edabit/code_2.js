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

