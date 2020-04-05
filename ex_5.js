let sum = 0;
let userNumber = Number(prompt('Enter a number: '));

while (userNumber >= 0) {
    sum += userNumber;
    userNumber = Number(prompt('Enter a number: '));
    
}

console.log(sum);