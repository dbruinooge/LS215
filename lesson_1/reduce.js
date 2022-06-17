function myReduce(array, func, initial) {
  let accumulator;
  
  if (initial === undefined) {
    accumulator = array[0];
    array = array.slice(1);
  } else {
    accumulator = initial;
  }

  array.forEach((currentValue, currentIndex, array) => {
    accumulator = func(accumulator, currentValue, currentIndex, array);
  });
  
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

let smallestResult = myReduce([5, 12, 15, 1, 6], smallest);           // 1
console.log(smallestResult);

let sumResult = myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
console.log(sumResult);




function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

let wordResult = longestWord(['abc', 'launch', 'targets', '']);      // "targets"

console.log(wordResult);