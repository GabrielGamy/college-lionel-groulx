// ======================================
// Exemple Arrays and Arrays Functions
// ======================================
let languages = ["html", "css", "Javascript", 2021, { name: "React.js"}, true];

for(let language of languages) {
    console.log(language);
}

// Map function
const array = [10, 20, 30, 40];
const newArray = array.map(x => x * 10);
console.log(newArray); // [100, 200, 300, 400]

// Reduce function
const array2 = [10, 20, 30, 40];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array2.reduce(reducer)); //100

// ForEach function
// Traitement du reduce avec forEach
let total = 0;
array2.forEach(function (num) {
    total += num;
});
console.log(total);

// Filter function
var numbers = [10, 20, 30, 24, 25, 31];
const result = numbers.filter(number => number < 30);
console.log(result); //[10, 20, 24, 25]

// Sort Function
let arraySort = ['Canada', 'Germany', 'China', 'Japan'];
console.log('sorted array: ', arraySort.sort()); //[Canada, China, “Germany”, “Japan”]

// Reverse Function
console.log('reverse array', arraySort.reverse());

// Push, Pop and Length
arraySort.push('South Africa');
console.log(arraySort.length);
arraySort.pop(); // supprime le dernier element du tableau 
console.log('sorted array: ', arraySort.sort()); 