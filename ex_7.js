let M = Number(prompt('Enter M: '));
let N = Number(prompt('Enter N: '));
let row = '';

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        row += '*';
    }
    document.write(`${row}<br>`);
    console.log(row);
    row = '';
}
