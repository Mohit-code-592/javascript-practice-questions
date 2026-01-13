//print all prime number from 1 to n
let n = 10;

for (let i = 2; i <= n; i++) {
    let isPrime = true
    for(let j = 2; j * j < i + 1; j++) {
        if (i % j == 0) {
            isPrime = false
            break;
        }
    }
    
    if (isPrime === true) {
        console.log(i);
    }
}
