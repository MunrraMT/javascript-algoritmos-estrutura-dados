const arr = [];

const arr1 = [33, 25, 19];
const arr2 = [41, 33, 21];
const arr3 = [41, 33, 21];
const arr4 = [41, 33, 21];

arr[0] = [arr1.slice(), arr2.slice()];
arr[1] = [arr3.slice(), arr4.slice()];

console.log(arr);
console.table(arr);

arr.map((item) => {
  item.map((i) => console.log(i));
});

arr.map((item) => {
  item.map((item2) => item2.map((item3) => console.log(item3)));
});
