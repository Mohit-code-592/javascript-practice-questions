//check number is palindrome or not
let num = 1214;
let rev = 0;
let temp = num;

if (num  < 0) {
    console.log("negative numbers are not palindrome");
}

while (temp !== 0) {
    let rem = temp % 10;
    temp = Math.floor(temp / 10);
    rev = rev * 10 + rem;
}

if (num === rev) {
    console.log("number is palindrome");
}
else {
    console.log("number is not a palindrome");
}



