/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [2, 3, 4, 5];

function findMissingNumber(numbers) {
  const sortedArray = [...numbers].sort((a, b) => a - b);
  const lastElement = sortedArray[sortedArray.length - 1];
  const firstElement = sortedArray[0];
  const firstDefaultElement = 1;
  if (sortedArray.length === 2) {
    return firstElement + 1;
  } else {
    const beforeMissingElement = sortedArray.find((element, index, array) => array[index + 1] - element === 2);
    if (beforeMissingElement === undefined) {
      if (firstElement !== 1) {
        return firstDefaultElement;
      } else return lastElement + 1;
    } else return beforeMissingElement + 1;
  }
}
findMissingNumber(arr);
export { findMissingNumber };
