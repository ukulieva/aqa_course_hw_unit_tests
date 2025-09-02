/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const allmyPizzas = [];
const allmyPizzasLC = [];
const resultUnique = [];
const competitorPizzasLC = [];
let resultNull = null;

for (const pizzaT1 of myPizzasT1) {
  let pizzaT1LC = pizzaT1.toLowerCase();
  if (!allmyPizzasLC.includes(pizzaT1LC)) {
    allmyPizzas.push(pizzaT1);
    allmyPizzasLC.push(pizzaT1LC);
  }
}

for (const pizzaT2 of myPizzasT2) {
  let pizzaT2LC = pizzaT2.toLowerCase();
  if (!allmyPizzasLC.includes(pizzaT2LC)) {
    allmyPizzas.push(pizzaT2);
    allmyPizzasLC.push(pizzaT2LC);
  }
}

for (const pizza of competitorPizzas) {
  competitorPizzasLC.push(pizza.toLowerCase());
}

for (let i = 0; i < allmyPizzasLC.length; i++) {
  if (!competitorPizzasLC.includes(allmyPizzasLC[i])) {
    resultUnique.push(allmyPizzas[i]);
  }
}

if (resultUnique.length === 0) {
  resultNull = null;
}
export { resultNull, resultUnique };
