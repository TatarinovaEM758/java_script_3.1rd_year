/* Напишите функцию, 
которая считает сумму 
четных чисел от 1 до n*/

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
readline.question('Введите число N: ', (n) => {
    function sumChet(n){
        let sum = 0;
        for (let i = 0; i <= n; i++){
            if (i % 2 === 0){
                sum = sum + i;
            }
        }
        console.log(sum);
    }
    sumChet(n);
    readline.close()
});