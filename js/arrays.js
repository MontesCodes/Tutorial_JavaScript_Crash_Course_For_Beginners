/// Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes';
console.log(fruits);

fruits.push('mangos');
console.log(fruits);

fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));
