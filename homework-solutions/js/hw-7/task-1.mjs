/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays() {
  const argArray = Array.from(arguments);
  const mergeArray = [];

  for (const arg of argArray) {
    mergeArray.push(...arg);
  }
  return mergeArray;
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const nespace = '_';
  let newSentence = '';
  if (!sentence.trim()) return newSentence;
  const sentenceArray = sentence.trim().split(/\s+/);
  if (sentenceArray.length === 1) return sentenceArray[0].toLowerCase();
  for (let i = 0; i < sentenceArray.length; i++) {
    let word = sentenceArray[i].toLowerCase();
    let firstWordLetter = word[0].toUpperCase();
    if (i === 0) {
      newSentence += word + nespace;
    } else if (i === sentenceArray.length - 1) {
      newSentence += firstWordLetter + word.slice(1);
    } else {
      newSentence += firstWordLetter + word.slice(1) + nespace;
    }
  }
  return newSentence;
}
console.log(devideBy(' Yy hhhh Thhhh h  tt wertEfhHHHszxcv'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const x = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    let y = x[i - 1] + x[i - 2];
    x.push(y);
  }
  return x[n];
}
console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
