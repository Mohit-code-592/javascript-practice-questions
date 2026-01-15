//fibonacci series
let num  = 10;
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= num; i++) {
    let third = first + second;
    console.log(third);
    first = second;
    second = third;
}
