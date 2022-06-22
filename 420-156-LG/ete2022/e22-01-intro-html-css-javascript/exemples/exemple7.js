// ======================================
// Exemple Destructuring
// ======================================

const myArray = [1, 2, 3];
const [elm1, elm2] = myArray;
console.log(`${elm1}, ${elm2}`);

const person = { name: 'Jules', age: 50 };
const { name, age } = person;
console.log(`${name}, ${age}`);
