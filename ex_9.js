let a1 = Number(prompt('Enter a1: '))
let b1 = Number(prompt('Enter a1: '))
let c1 = Number(prompt('Enter a1: '))
let a2 = Number(prompt('Enter a1: '))
let b2 = Number(prompt('Enter a1: '))
let c2 = Number(prompt('Enter a1: '))

console.log(`HPT:`);
console.log(`${a1}x + ${b1}y = ${c1}`);
console.log(`${a2}x + ${b2}y = ${c2}`);
console.log(`Nhân 2 với pt 2.`);
console.log(`Ta được:`);
console.log(`${a1}x + ${b1}y = ${c1}`);
console.log(`${a2 * 2}x + ${b2 * 2}y = ${c2 * 2}`);
console.log(`Trừ 2 pt ta được:`);
console.log(`${b1 - b2 * 2}y = ${c1 - c2 * 2}`);
let y = (c1 - c2 * 2) / (b1 - b2 * 2);
console.log(`y = `, y);
console.log(`x = `, c2 - y * b2);




