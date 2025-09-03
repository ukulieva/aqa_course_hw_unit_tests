/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */

let salary = 1000;
let grade;

const juniorGrade = 'junior';
const middleGrade = 'middle';

if (salary >= 1000) {
  grade = middleGrade;
} else {
  grade = juniorGrade;
}