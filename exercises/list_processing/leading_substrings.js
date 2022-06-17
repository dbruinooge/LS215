// function leadingSubstrings(string) {
//   let result = [];
//   for (let i = 0; i < string.length; i += 1) {
//     result.push(string.slice(0, i + 1));
//   }
  
//   return result;
// }

function leadingSubstrings(string) {
  return [...string].map((_, index, array) => {
    return array.slice(0, index + 1).join('');
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
