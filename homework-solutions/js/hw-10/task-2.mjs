/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/
const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

function countOccurrences(arr) {
  const uniqueElements = [...new Set(arr)];
  const countOccurrences = {};

  for (const uniqueElement of uniqueElements) {
    let accum = arr.reduce((accumulator, element) => {
      return accumulator + (element === uniqueElement ? 1 : 0);
    }, 0);
    countOccurrences[uniqueElement] = accum;
  }
  return countOccurrences;
}
countOccurrences(numbers);
export { countOccurrences };
