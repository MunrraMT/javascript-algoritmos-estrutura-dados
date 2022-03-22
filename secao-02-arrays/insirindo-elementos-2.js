const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

numbers.splice(3, 3);
console.log(numbers);

numbers.splice(3, 0, 15, 25, 35, 45, 55);
console.log(numbers);
