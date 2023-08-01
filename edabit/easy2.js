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

