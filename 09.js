//simple calculator using swith case

let num1 = 22;
let num2 = 33;

console.log("Enter a number to perform particular opertion");
console.log("1 : Addition");
console.log("2 : multiplication");
console.log("3 : subtraction");
console.log("4 : division");
console.log("5 : modoules");

let opertion =  1;
switch (opertion) {
    case 1 : console.log(num1 + num2);
    break;
    case 2 : console.log(num1 * num2);
    break;
    case 3 : console.log(num1 - num2);
    break;
    case 4 : console.log(num1 / num2);
    break;
    case 5 : console.log(num1 % num2);
    break;
    default : console.log("opertion is wrong");

}
