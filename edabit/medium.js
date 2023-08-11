/*
Sort the Unsortable
sortIt([4, 1, 3]) ➞ [1, 3, 4]
sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
*/
function sortIt(arr) {
	return arr.sort();
}

/*
Tile Teamwork Tactics
possibleBonus(3, 7) ➞ true
possibleBonus(1, 9) ➞ false
*/
function possibleBonus(a, b) {
	if ( a < b ) {
  	if (( a + 6 ) >= b) {
			return true;
		}
    return false;
	} else {
    return false;
	}
}

/*
Remove Trailing and Leading Zeros
removeLeadingTrailing("230.000") ➞ "230"
removeLeadingTrailing("00402") ➞ "402"
*/
function removeLeadingTrailing(n) {
	return Number(n).toString();
}

/*
Burglary Series (04): Add its Name
addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
*/
function addName(obj, name, value) {
	obj[name] = value;
  return obj;
}

//All About Anonymous Functions: Adding
function addsNum(n) {
	function number(a) {
		return n + a;
  }
	return number;
}
function addsNum(n) {
    return (x) => x+n
}

