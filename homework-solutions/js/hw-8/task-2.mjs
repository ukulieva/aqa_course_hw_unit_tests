/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

import { forEach } from './task-1.mjs';

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

const vowels = 'aeiou';
function countVowels(word) {
  return word.split('').reduce((accumulator, element) => {
    return vowels.includes(element.toLowerCase()) ? accumulator + 1 : accumulator;
  }, 0);
}

function sortedByVowels(wordsArr) {
  wordsArr.sort((wordA, wordB) => {
    const countVowelsofWordA = countVowels(wordA);
    const countVowelsofWordB = countVowels(wordB);

    return countVowelsofWordA - countVowelsofWordB;
  });
  return wordsArr;
}

export { sortedByVowels };
