function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) return false;
  }
  
  return true;
}

let isAString = value => typeof value === 'string';
let result1 = myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
console.log(result1);

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

let result2 = areAllNumbers([1, 5, 6, 7, '1']);             // false
let result3 = areAllNumbers([1, 5, 6, 7, 1]);               // true
let result4 = areAllNumbers([1, 5, 6, 7, NaN]);             // false

console.log(result2);
console.log(result3);
console.log(result4);