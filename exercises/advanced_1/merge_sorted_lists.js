function merge(arr1, arr2) {
  let result = [];
  arr1 = arr1.slice();
  arr2 = arr2.slice();

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] === undefined) {
      result.push(arr2.shift());
    } else if (arr2[0] === undefined) {
      result.push(arr1.shift());
    } else {
      result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]