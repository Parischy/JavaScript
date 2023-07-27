let n;
n = "Irina";
let age = 20;

document.write(n);
document.write("<div>","Age ="," ",age,"</div>");

let xyz = 20;
document.write("<div>","Before = ",xyz,"</div>");
xyz = 21;
document.write("<div>","After = ",xyz,"</div>");

/*
ใช้ let 2 ตัว เพื่อเปลี่ยนค่าคงที่ไม่ได้
let xyz = 20;
document.write("Test",xyz);
let xyz = 21;
document.write("Test",xyz);
*/

/*
string = " "
let xyz = "begin";
document.write("Test",xyz);
let xyz = "the end";
document.write("Test",xyz);
*/

const vat = 0.07;
document.write("<div>",vat,"</div>");

/*
Error
const vat = 0.07;
document.write(vat);
vat = 0.08
document.write(vat);
*/

//let money = 500 + 510.90;
//document.write(money);

document.write("<div>",typeof("moon"),"</div>") //string
document.write("<div>",typeof(moon),"</div>") //undefined
document.write("<div>",typeof(20),"</div>"); //number
let a = 500;
document.write("<div>",typeof(a),"</div>")

//"<div>""</div>" ใช้เว้นบรรทัด

//let tax = parseFloat("20.15");
let tax = +"20.15";
document.write(typeof(tax));

//let num = 20+"";
document.write(typeof(num));
