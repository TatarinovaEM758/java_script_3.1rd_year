/*Напишите функцию, 
которая возвращает 
массив чисел от 1 до n, 
возведенных в квадрат*/

function kvmass(m){
    let kvm = [];
    let k = m.length;
    for (let i = 0; i<k; i++){
        kvm.push(m[i]*m[i]);
    }
    console.log(kvm);
}

let mass = [1, 2, 3, 4, 5];
kvmass(mass);

let mass2 = [3, 7, 1, 6, 12];
kvmass(mass2);