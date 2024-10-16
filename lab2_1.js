/* Создание нового массива из чисел больше N
Создайте массив только с элементами больше N
*/

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
readline.question('Введите число N: ', (n) => { 
    let kol = 5;
    let i = 0
    let mass = [];
    while(i <= kol) {
        let num = Number(n) + i; 
        mass.push(num); 
        i++; 
    }
    console.log(mass);
    readline.close()
});