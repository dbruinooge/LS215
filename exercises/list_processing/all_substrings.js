function leadingSubstrings(string) {
  return [...string].map((_, index, array) => {
    return array.slice(0, index + 1).join('');
  });
}

// function substrings(string) {
//   let result = [];
//   for (let index = 0; index < string.length; index += 1) {
//     result = result.concat(leadingSubstrings(string.slice(index)));
//   }
  
//   return result;
// }

// Further exploration

function substrings(string) {
  return [...string].map((_, index) => leadingSubstrings(string.slice(index)))
                    .flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
