let userNumber = Number(prompt('Enter a number: '));
let count = 0;

if (userNumber < 2) {
    console.log(`${userNumber} không là số nguyên tố.`);
} else if (userNumber === 2) {
    console.log(`${userNumber} là số nguyên tố.`);
} else if (userNumber % 2 === 0) {
    console.log(`${userNumber} không là số nguyên tố.`);
} else {
    for (let i = 3; i <= Math.sqrt(userNumber); i+=2) {
        if (userNumber % i === 0) {
            count++;        
        }
    }
    if (count === 0) {
        console.log(`${userNumber} là số nguyên tố.`);
    } else {
        console.log(`${userNumber} không là số nguyên tố.`);
    }
}

