/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
let minAge = 18;
let maxAge = 60;
let age = ' 33hh';

const incorrectTypeMessage = 'Incorrect data type';
const defaultMessage = 'Technical work';

let newAge = Number(age);

if (isNaN(newAge)) {
  console.log(incorrectTypeMessage);
} else {
  if (newAge < minAge) {
    console.log("You don't have access cause your age is " + newAge + " It's less then " + minAge);
  } else if (newAge >= minAge && newAge < maxAge) {
    console.log('Welcome  !');
  } else if (newAge > maxAge) {
    console.log('Keep calm and look Culture channel');
  } else {
    console.log(defaultMessage);
  }
}
