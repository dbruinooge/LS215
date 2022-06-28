function featured(number) {
  for (let i = number + 1; i <= 9876543201; i += 1) {
    if (isFeatured(i)) return i;
  }
  return 'There is no possible number that fulfills those requirements.';
}

function isFeatured(number) {
  if (number > 9876543201) return false;
  return number % 2 === 1 && number % 7 === 0 &&
        !(hasDuplicates(String(number).split('')));
}

function hasDuplicates(array) {
  let seen = [];
  for (let i = 0; i < array.length; i += 1) {
    if (seen.includes(array[i])) return true;
    seen.push(array[i]);
  }

  return false;
}

// console.log(isFeatured(49));    // true
// console.log(isFeatured(98));    // false
// console.log(isFeatured(97));    // false
// console.log(isFeatured(133));   // false
// console.log(isFeatured(7));     // true
// console.log(isFeatured(35));    // true

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
