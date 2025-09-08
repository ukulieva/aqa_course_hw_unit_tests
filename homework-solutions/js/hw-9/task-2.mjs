/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  const { name, age } = character;

  if (typeof name !== 'string' || typeof age !== 'number') {
    throw new Error('Invalid character');
  }

  characters.push({ name, age });
}

function getCharacter(searchName) {
  for (let i = 0; i < characters.length; i++) {
    const { name, age } = characters[i];
    if (name === searchName) {
      return characters[i];
    }
  }
}

function getCharactersByAge(minAge) {
  if (typeof minAge != 'number' || minAge < 0) {
    throw new Error('Invalid minAge');
  }
  const minAgesArray = [];
  for (let i = 0; i < characters.length; i++) {
    const { name, age } = characters[i];
    if (age >= minAge) {
      minAgesArray.push(characters[i]);
    }
  }
  return minAgesArray;
}

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (!character) throw new Error('Invalid name');
  if (newCharacter.name) character.name = newCharacter.name;
  if (newCharacter.age) character.age = newCharacter.age;
}

function removeCharacter(name) {
  const character = getCharacter(name);
  if (!character) throw new Error('Invalid minAge');
  const index = characters.findIndex((character) => character.name === name);
  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
