/*
Add up the Numbers from a Single Number
addUp(4) ➞ 10 // 1 + 2 + 3 + 4 = 10
*/
function addUp(num) {
	return ( num * ( num + 1 ) ) / 2;
}

/*
Matchstick Houses
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
*/
function matchHouses(step) {
	if ( step > 0 ) {
		return ( 6 * step ) - ( step - 1 );
	} else {
		return step;
	}
}

/*
Find the Smallest and Biggest Numbers
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/
function minMax(arr) {
	let a = Math.min(...arr); // Math.min.apply(null, arr);
	let b = Math.max(...arr); // Math.max.apply(null, arr);
	return [a, b];
}

/*
Which Function Returns the Larger Number?
Your function will be passed two functions, f and g, that don't take any parameters. 
Your function has to call them, 
and return a string which indicates which function returned the larger number.
*/
function whichIsLarger(f, g) {
	if ( f() > g() ) {
		return "f";
	} else if ( g() > f() ) {
		return "g";
	} else if ( g() == f() ) {
		return "neither";
	} else {
		return "neither";
	}
}

/*
Drink Sorting
sorted by price in ascending order.
drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
*/
function sortDrinkByPrice(drinks) {
	return drinks.sort((a, b) => (a.price > b.price) ? 1 : -1);
}

/*
Is it Time for Milk and Cookies?
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
*/
function timeForMilkAndCookies(date) {
	let month = date.getMonth();
  let day = date.getDate();
  if ( month == 11 && day == 24) {
		return true;
	} else {
		return false;
	}
}

/*
Find the Amount of Potatoes
potatoes("potato") ➞ 1
potatoes("potatopotato") ➞ 2
*/
function potatoes(str) {
	return str.split("potato").length - 1;
}

/*
Filter out Strings from an Array
filterArray([1, 2, "a", "b"]) ➞ [1, 2]
*/
function filterArray(arr) {
	return arr.filter(e => typeof e === "number");
}

//Older Than Me
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
	}
}

/*
Number of Squares in an N * N Grid
numberSquares(2) ➞ 5
numberSquares(4) ➞ 30
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
*/
function numberSquares(n) {
	return (n * (n + 1) * ((2 * n) + 1))/6;
}

/*
Check if One Array can be Nested in Another
canNest([1, 2, 3, 4], [0, 6]) ➞ true
*/
function canNest(arr1, arr2) {
	let firstMin = arr1.sort()[0]
  let firstMax = arr1.sort()[arr1.length - 1]
  let secondMin = arr2.sort()[0]
  let secondMax = arr2.sort()[arr2.length - 1]
  return firstMin > secondMin && firstMax < secondMax
}

/*
Largest Swap
largestSwap(27) ➞ false // 27 < 72
*/
function largestSwap(num) {
	let arrNum = num.toString().split("")
  let front = parseInt(arrNum[0])
  let back = parseInt(arrNum[1])
  if (front >= back) {
    return true
  } else {
    return false
  }
}

/*
Sort by String Length
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
*/
function sortByLength(arr) {
	return arr.sort((a,b) => a.length - b.length);
}

