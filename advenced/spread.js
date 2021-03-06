function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(1, 2, 3));
console.log(sum(...numbers));

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
let arr3 = arr1.concat(arr2);
let arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

let obj1 = {
  foo: 'bar',
  x: 42
};
let obj2 = {
  foo: 'baz',
  y: 41
};
let obj3 = {
  ...obj1,
  ...obj2
};
console.log(obj3);

let a = [[1], [2], [3]];
let b = [...a];
console.log(b);
// aにも影響する
console.log(b.shift());

function minus(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous - current;
  });
}
console.log(minus(6, 3, 1));
