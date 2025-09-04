/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
  isPalindrom
      ✕ returns true for a single-character word (2 ms)
      ✕ returns true for a simple palindrome
      ✕ returns false for a non-palindrome word
      ✕ returns true for a mixed-case palindrome
      ✕ returns true for an empty string
      ✕ returns false if input is not a string
*/

function isPalindrom(word) {
  const newWordArray = [];
  if (typeof word !== 'string') return false;
  if (!word) return true;
  const lowerWord = word.toLowerCase();
  const wordArray = Array.from(lowerWord.trim().split(''));
  for (let word of wordArray) {
    newWordArray.unshift(word);
  }
  const newWord = newWordArray.join('');
  if (newWord === lowerWord) {
    return true;
  } else return false;
}

isPalindrom('MadAm');
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const biggestWordsArray = [];
  if (typeof sentence !== 'string') return biggestWordsArray;
  if (!sentence.trim()) return biggestWordsArray;

  const sentenceArray = sentence.trim().split(/\s+/);
  const sentenceArrayLength = [];

  for (let i = 0; i < sentenceArray.length; i++) {
    sentenceArrayLength.push(sentenceArray[i].length);
  }
  const maxLength = Math.max(...sentenceArrayLength);
  for (const word of sentenceArray) {
    if (word.length === maxLength) {
      biggestWordsArray.push(word);
    }
  }
  return biggestWordsArray;
}

//console.log(findLongestWords(123));
export { isPalindrom, findLongestWords };
