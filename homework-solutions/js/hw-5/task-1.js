/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
const space = '-';

for (let i = 10; i >= 0; i--) {
  if (i % 2 === 0) {
    if (i === 0) {
      evenNumbersResult += i;
    } else evenNumbersResult += i + space;
  }
}
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
const smile = ':)';

for (let i = 1; i <= 5; i++) {
console.log(smilePatternResult+smile);
}

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */


const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

replaceSpacesWithOneResult=text.replaceAll(" ","1");
console.log(replaceSpacesWithOneResult); // 'Hello!1I1am1a

//export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
