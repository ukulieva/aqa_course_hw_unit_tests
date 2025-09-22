/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). 
Функция принимеют на вход массив и колбэк. 
Используйте дженерик типы. 
Затипизировать надо саму функцию и коллбэк.
Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]
   */

type mapArraysCallback<T> = (element: T, index: number) => T;

function mapArrays<T>(array: T[], callback: mapArraysCallback<T>): T[] {
  const newArray: T[] = [];
  array.forEach((element, index) => newArray.push(callback(element, index)));
  return newArray;
}
console.log(mapArrays([1, 2, 3, 4, 5], (element, index) => element * index));