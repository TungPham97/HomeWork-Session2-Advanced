let userNumber = Number(prompt('Enter a number: '));

if (userNumber < 2) {
    console.log(`Không có số nguyên tố nào nhỏ hơn ${userNumber}`);
} else {
    console.log(`Các số nguyên tố <= ${userNumber} là: `);
    console.log(2);
    let count = 0;
    for (let i = 3; i <= userNumber; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 0) {
            console.log(i);
        }
        count = 0;
    }
}

