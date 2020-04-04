let userNumber = Number(prompt('Enter a number: '));
let sumOdd = 0;
let sumEven = 0;

for (let i = 2; i <= userNumber; i += 2) {
    sumEven += i;
}

for (let j = 1; j <= userNumber; j += 2) {
    sumOdd += j;
}

console.log(`Tổng các số lẻ trong đoạn từ 1 - ${userNumber} là:`, sumOdd);
console.log(`Tổng các số chẵn trong đoạn từ 1 -${userNumber} là:`, sumEven);