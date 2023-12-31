/*
How Many Vowels?
countVowels("Celebration") ➞ 5
*/
function countVowels(str) {
	let vowels = "aeiou";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
      if (str[i] == vowels[n]) {
        arr.push(str[i])
      }
    }
  }
  return arr.length
}

/*
What's Hiding Amongst the Crowd?
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
*/
function detectWord(str) {
	let a = "";
  let b = str.length;
  for (let i = 0; i < b; i++) {
    let char = str[i];
    let isLowercase = char !== char.toUpperCase();
    a += isLowercase ? char : "";
  }
  return a;
}

/*
Burglary Series (20): Sign Your Name
const obj = { yourSignature: "" };
signYourName( obj ) {
  // write your code here
  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;

} ➞ { yourSignature: "Whatever" }
*/
function signYourName(obj) {
    Object.preventExtensions(obj);
      
      
    // DON'T CHANGE OR REMOVE THE LINES BELOW
    obj.yourSignature = "Whatever";
      obj.spouseSignature = "Nice Try"
    return obj;
  }

/*
Sum of Multiplication
multiSum(1) ➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
*/
function multiSum(num, ten=10) {
    let a = 0
    for (let i = 1; i <= ten; i++) {
    a += (num * i)
    }
    return a;
}

/*
Sum of Cubes
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/
function sumOfCubes(nums) {
	let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a += nums[i] ** 3;
  }
  return a;
}

//Sort Numbers in Ascending Order
function sortNumsAscending(arr) {
	if (arr == null) {
    return [];
  } else {
		return arr.sort((a, b) => { return a - b });
	}
}

/*
Sort an Array by String Length
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]
*/
function sortByLength(arr) {
	return arr.sort((a, b) => { return a.length - b.length });
}

/*
Is the Average of All Elements a Whole Number?
isAvgWhole([1, 3]) ➞ true;
isAvgWhole([1, 2, 3, 4]) ➞ false;
*/
function isAvgWhole(arr) {
	let a = 0;
  let b = arr.length;
  for (let i = 0; i < b; i++) {
    a += arr[i];
  }
  return Number.isInteger( a / b );
}

/*
Recursion: Factorials
factorial(5) ➞ 120
*/
function factorial(int) {
	if( int > 1 ) {
    return int * ( factorial ( int - 1) );
  } else {
		return 1;
	}
}

/*
Find the Bomb
bomb("There is a bomb.") ➞ "Duck!!!"
*/
function bomb(str) {
	let a = str.toLowerCase();
	let b = str.toUpperCase();
  if ( a.includes("bomb") == true || b.includes("bomb") == true ) {
    return "Duck!!!";
  } else {
		return "There is no bomb, relax.";
	}
}

/*
Absolute Sum
getAbsSum([2, -1, 4, 8, 10]) ➞ 25
*/
function getAbsSum(arr) {
	let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.abs(arr[i]);
  }
  return result;
}

/*
Calculate the Mean
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55
*/
function mean(arr) {
	let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  let sum = a / arr.length;
  return Number(sum.toFixed(2));
}

/*
Convert a Number to Base-2
binary(5) ➞ "101"
// 1*1 + 1*4 = 5
*/
function binary(decimal) {
	return decimal.toString(2);
}

/*
Number Split
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
*/
function numberSplit(n) {
  if ( n % 2 == 0 ) {
    return [ n / 2, n / 2];
  } else {
    return [ Math.floor( n / 2 ), Math.ceil( n / 2 ) ];
  }
}

//Hex to Binary
function toBinary(num) {
	return num.toString(2)
}

/*
Highest Digit
highestDigit(2) ➞ 2
highestDigit(377401) ➞ 7
*/
function highestDigit(number) {
	let str = number.toString().split("")
  let count = str.sort()[str.length - 1]
  return parseInt(count);
}

/*
How Much is True?
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
*/
function countTrue(arr) {
	return arr.filter((a) => a).length
}

/*
Say "Hello" Say "Bye"
sayHelloBye("alon", 1) ➞ "Hello Alon"
sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
*/
function sayHelloBye(name, num) {
	let a = name.charAt(0).toUpperCase() + name.slice(1);
  if(num === 1) {
    return "Hello " + a;
  } else if (num === 0) {
    return "Bye " + a;
  }
}

/*
Convenience Store
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
*/
function changeEnough(change, amountDue) {
	let sum = (change[0] * 0.25) + (change[1] * 0.1) + (change[2] * 0.05) + (change[3] * 0.01);
	return sum >= amountDue;
}

/*
Derivative of a Function
derivative(1, 4) ➞ 1
derivative(3, -2) ➞ 12
*/
function derivative(b, m) {
	return b * Math.pow(m, b - 1);
}

/*
Convert Key, Values in an Object to Array
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
function objectToArray(obj) {
	let keys = Object.keys(obj);
  let value = Object.values(obj);
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i], value[i]]);
  }
  return result;
}

/*
Array of Multiples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
*/
function arrayOfMultiples (num, length) {
	let result = []
  for (let i = 1; i <= length; i++) {
    result.push(num * i)
  }
  return result
}

/*
Integer Digits Count
count(318) ➞ 3
count(-92563) ➞ 5
*/
function count(n) {
  return n.toString().replace("-", "").length
}

/*
A Redundant Function
const f1 = redundant("apple")
f1() ➞ "apple"
const f2 = redundant("pear")
f2() ➞ "pear"
*/
function redundant(str) {
  return ()=> str;
}

