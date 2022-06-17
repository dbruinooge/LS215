function buyFruit(array) {
  let result = [];
  array.forEach(([fruit, quantity]) => {
    for (let i = 1; i <= quantity; i += 1) {
      result.push(fruit);
    }
  });
  
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
