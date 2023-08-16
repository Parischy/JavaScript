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

/*
Reverse Words in a String
reverseWords(" the sky is blue") ➞ "blue is sky the"
reverseWords("hello   world!  ") ➞ "world! hello"
*/
function reverseWords(string) {
	let result = []
  let wordArr = string.split(" ")
  for (let i = wordArr.length - 1; i >= 0; i--) {
    result.push(wordArr[i])
  }
  return result.join(" ")
}

/*
Let's Sort This Array!
ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]
*/
function ascDesNone(arr, str) {
	if (str == "Asc") {
    return arr.sort((a, b) => a - b)
  } else if (str == "Des") {
    return arr.sort((a, b) => b - a)
  } else {
    return arr
  }
}

/*
Find the Second Largest Number
secondLargest([10, 40, 30, 20, 50]) ➞ 40
*/
function secondLargest(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2]
}

//How Heavy Is It?
function weight(r, h) {
	let volume = (Math.PI * Math.pow(r, 2) * (h / 1000))
  return parseFloat(volume.toFixed(2))
}

//Temperature Conversion
function tempConversion(celsius) {
	let f = parseFloat((celsius * 9 / 5 + 32).toFixed(2))
  let k = parseFloat((celsius + 273.15).toFixed(2))
  if (k < 0) {
    return "Invalid"
  }

  return [f, k]
}

