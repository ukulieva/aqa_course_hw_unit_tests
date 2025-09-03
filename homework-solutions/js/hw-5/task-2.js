/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';
const divByThreeInfo = ' - делится на 3';
const divByFiveInfo = ' - делится на 5';
const divByThreeAndFiveInfo = ' - делится и на 3 и на 5';
const newLine = '\n';
const intervalEnd = 100;

for (let i = 1; i <= intervalEnd; i++) {
  if (i === intervalEnd) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzResult += i + divByThreeAndFiveInfo;
    } else if (i % 5 === 0) {
      fizzBuzzResult += i + divByFiveInfo;
    } else if (i % 3 === 0) {
      fizzBuzzResult += i + divByFiveInfo;
    }
  } else {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzResult += i + divByThreeAndFiveInfo + newLine;
    } else if (i % 5 === 0) {
      fizzBuzzResult += i + divByFiveInfo + newLine;
    } else if (i % 3 === 0) {
      fizzBuzzResult += i + divByThreeInfo + newLine;
    } else fizzBuzzResult += i + newLine;
  }
}
console.log(fizzBuzzResult);

export { fizzBuzzResult };
