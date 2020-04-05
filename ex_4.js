let userNumber = Number(prompt('Enter a number: '));
let a1 = 1, a2 = 1;

if (userNumber == 1 || userNumber == 2) {
    console.log(1);
} else {
    let i = 3, a;
    while (i <= userNumber) {
        a = a1 + a2;
        a1 = a2; 
        a2 = a;
        i++;
    }
    console.log(`Phần tử thứ ${userNumber} của dãy Fibonacci là: ${a}`);
}