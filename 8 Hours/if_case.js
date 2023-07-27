let age = 20;
if ( age >= 20 ) {
    document.write("You are an adult");
}

let balance = 5000;
let withdraw = 6000;
if (withdraw <= balance) {
  console.log("Withdraw =", withdraw);
  balance -= withdraw;
  console.log("Balance =", balance);
} else {
    console.log("Insufficient balance");
}

let score = 40;
pass = score >= 50 ? "Pass the exam" : "Fail the exam";
document.write(pass);

let day = 5;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednessday");
        break;
    default:
        document.write("no information found");
}

let num = 50;
if ( num % 2 == 0 ) {
    console.log("Even number");
} else {
    console.log("Odd number");
}