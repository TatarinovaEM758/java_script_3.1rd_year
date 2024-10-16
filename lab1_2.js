/* определить четное или нечетное число:
программа проверяет четное или нечетное число ввел пользователь
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n) => {
    if (n % 2 === 0) {
        console.log('Число четное');
    } else if (n % 2 === 1) {
        console.log('Число нечетное');
    } else {
        console.log('Неккоректный ввод');
    } 
    readline.close();
});