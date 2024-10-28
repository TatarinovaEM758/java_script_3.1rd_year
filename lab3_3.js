/* Напишите функцию, 
которая возвращает 
наименьшее из трех чисел
*/

function naim(m){
    minim = Math.min(...m);
    console.log(minim);
}

let mass = [10, 16, 3];
naim(mass);

let mass2 = [88, 59, 62];
naim(mass2);