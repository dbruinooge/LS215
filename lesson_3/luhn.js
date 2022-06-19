// from right to left, double every second digit
// if doubling results in a sum 10 or greater, subtract 9
// add all digits
// if the final sum ends in 0, it's a valid luhn number

// input will be a string
// output will be boolean (true or false)

// data structures
// since we need to traverse and transform individual digits, an array will be useful

// algorithm
/*
remove all non-numeric characters
split to an array and reverse, map to numbers
map each digit according to the rule: double if it's an odd index, and if the result
of doubling is 10 or greater, subtract 9
 - leave even indexes unchanged
reduce array to a sum
 - return true if sum ends in zero, false otherwise

*/

function calculateLuhn(string) {
  let clean = string.replace(/[\D]/g, '');
  if (clean.length === 0) return false;
  let numArray = clean.split('').map(Number).reverse();
  let mapped = numArray.map((num, idx) => {
    if (idx % 2 === 1) {
      let doubled = num * 2;
      return doubled >= 10 ? doubled - 9 : doubled;
    } else {
      return num;
    }
  });

  let checksum = mapped.reduce((sum, num) => sum + num);
  return checksum;
}

function validLuhn(string) {
  return calculateLuhn(string) % 10 === 0;
}

function fixLuhn(string) {
  if (validLuhn(string)) return string;
  let checksum = calculateLuhn(string);
  for (let i = 0; i < 10; i += 1) {
    if (validLuhn(string + String(i))) {
      return string + String(i);
    }
  }
}

console.log(validLuhn('2323 2005 7766 3554'));  // true
console.log(validLuhn('3323 2005 7766 3554'));  // false
console.log(validLuhn('I like ice cream'));     // false
console.log(validLuhn(`23232005dsfv77663554`)); // true
console.log(validLuhn(''));                     // false

console.log(fixLuhn('11112'));                  // 111120
console.log(fixLuhn('2323 2005 7766 355'));     // 2323 2005 7766 3554