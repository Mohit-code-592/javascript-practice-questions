//count digit in a number
let num = 123456;
let couter = 0;
while (num != 0) {
    num = Math.floor(num / 10);
    couter++;
}

console.log(couter);
