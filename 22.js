//reverse a number
let num = 12345;
let rev = 0;
while (num != 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    rev = rev * 10 + rem;
}

console.log(rev);
