// ======================================
// Exemple Spread & Rest Operators
// ======================================

// Spread
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; 
// newArray devient alors: [1, 2,3, 4, 5];
console.log(newArray);

const oldObj = { name: 'Albert' };
const newObj = { ...oldObj, gender: 'Male' };
// mewObj would then be { name: 'Kevin', gender: 'Male' }
console.log(newObj);

// Rest
const displayArray = (...args) => {
    console.log(args.sort());
}
displayArray(1,5,2,4);