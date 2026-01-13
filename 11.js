//check number is prime or not;
let number = 44;
if (number < 2) {
    console.log(`number is not Prime : ${number}`);
    return;
}
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        console.log(`number is not prime : ${number}`);
        return;
    }
}

console.log(`number is prime : ${number}`);
