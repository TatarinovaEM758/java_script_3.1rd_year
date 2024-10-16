/* вывести числа, кратные 5:
программа выводит все числа от 1 до N, кратные 5
*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n)=>{
    let i=1;
    while (i<=n){
        if (i%5===0){
            console.log(i)
            i++;
            continue;
        }
        i++;
    }
    readline.close();
});