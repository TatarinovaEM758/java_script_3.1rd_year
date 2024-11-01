/* Преобразование массива объектов в массив строк.
Преобразуйте массив объектов в массив строк
*/

let num = [
    {name:'Lisa', gen:'girl'},
    {name:'Kris', gen:'girl'},
    {name:'Ben', gen:'boy'}
];
let numStr = num.map(item => item.name);
console.log(numStr);