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

function mergeSort(array) {
  // break down
  if (array.length === 1) {
    return array;
  } else {
    let middle = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)));
  }
}

console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
