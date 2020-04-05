let userString = prompt('Enter a string: ')
flag = 0;

for (let i = 0; i < Math.ceil(userString.length / 2); i++) {
    if (userString[i] !== userString[userString.length - i - 1]) {
        console.log(`Chuỗi '${userString}' không phải chuỗi đối xứng.`);
        break;
    } else {
        flag++;
    }
}
if (flag === Math.ceil(userString.length / 2)) {
    console.log(`Chuỗi ${userString} là chuỗi đối xứng`);
}
