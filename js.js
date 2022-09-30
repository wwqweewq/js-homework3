// let n = +prompt('Введіть число n :');
// let sum = 0;
// console.log('Number n : ' + n);
// for (let i = n; i > 0; i--) {
//     if (n % i == 0) {
//         sum+=i;
//     }
// }
// console.log('sum ' + sum);
let c = +prompt('Enter number c : ');
let d = +prompt('Enter number d : ');
let count = 0;
console.log('Number c : ' + c);
console.log('Number d : ' + d);
for (let i = c; i <= d; i++) {
    if ( ((i**3 % 10)  == 4)|| ((i**3 % 10) == 9) ) {
        count++;
    }
}
console.log('Count : ' + count);