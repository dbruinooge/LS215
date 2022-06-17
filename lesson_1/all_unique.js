function isAllUnique(string) {
  let cleanString = string.replace(/ /g, '').toLowerCase();
  let sorted = cleanString.split('').sort();
  for (let index = 0; index < sorted.length; index += 1) {
    if (sorted[index] === sorted[index - 1]) return false;
  }
  
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
