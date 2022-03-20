const arr = [];

const arr1 = [33, 25, 19];
const arr2 = [41, 33, 21];

arr[0] = arr1;
arr[1] = arr2;

console.log(arr);
console.table(arr);

arr.map((item) => {
  item.map((i) => console.log(i));
});
