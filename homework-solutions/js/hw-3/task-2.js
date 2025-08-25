/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let input=6;
let output;

if (0 < input && input < 10){
    let n = String (input);
    output = Number(n) + (Number(n+n))+ Number(n+n+n);
console.log(output);
}