const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

numbers[numbers.length] = 10;
numbers[numbers.length] = 11;

console.log(numbers);

numbers.push(12);
numbers.push(13);
numbers.push(14);
numbers.push(15);
numbers.push(16);

console.log(numbers);

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);

console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);

numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers);
