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

//Travelling Salesman Problem
function paths(n) {
	let num = n;
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

/*
25-Mile Marathon
marathonDistance([1, 2, 3, 4]) ➞ false
marathonDistance([1, 9, 5, 8, 2]) ➞ true
*/
function marathonDistance(d) {
	let sum = 0
  for (let i = 0; i < d.length; i++) {
    sum += Math.abs(d[i])
  }
  if (sum == 25) {
    return true
  } else {
    return false
  }
}

//Volume of a Cone
function coneVolume(h, r) {
	let sum = (( Math.PI * ( r ** 2 ) * h ) / 3).toFixed(2);
	return parseFloat(sum);
}

/*
Get the Area of a Country
areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"
*/
function areaOfCountry(name, area) {
	let total = 148940000;
  let percentage = ((area / total) * 100).toFixed(2)
  return `${name} is ${percentage}% of the total world's landmass`
}

