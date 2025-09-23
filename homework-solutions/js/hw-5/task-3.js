/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';

const wordArr = [...word];
let vowelsCount = 0;
let consonantsCount = 0;

for (let letter of wordArr) {
  if (vowels.includes(letter)) {
    vowelsCount++;
  } else if (consonants.includes(letter)) {
    consonantsCount++;
  }
}

let vowelsAndConsonantsResult = word + ' contains ' + vowelsCount + ' vowels and ' + consonantsCount + ' consonants';
export { vowelsAndConsonantsResult };
