/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

function getKeyByValue<T extends object, U>(object: T, value: U): keyof T | undefined {
  const findKey = (Object.keys(object) as (keyof T)[]).find((k) => object[k] === value);
  return findKey;
}

const user = { id: 1, name: 'Юля', active: true };
console.log(getKeyByValue(user, 'Юля'));
console.log(getKeyByValue(user, 1));
console.log(getKeyByValue(user, false));
