/* Посчитать сумму всех чисел от 1 до N:
программа выводит сумму всех чисел от 1 до N
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n) => {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum = sum + i
        i++;
    }
    console.log(sum);
});