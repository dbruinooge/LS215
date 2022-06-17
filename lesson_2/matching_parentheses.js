// function isBalanced(string) {
//   let balance = 0;
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === '(') {
//       balance += 1;
//     } else if (string[i] === ')') {
//       balance -= 1;
//     }
//     if (balance < 0) return false;
//   }
  
//   return balance === 0;
// }

// Further exploration with forEach

function isBalanced(string) {
  let count = 0;
  let balanced = true;
  
  [...string].forEach(letter => {
    if (letter === '(') {
      count += 1;
    } else if (letter === ')') {
      count -= 1;
    }
    if (count < 0) balanced = false;
  });
  
  if (count !== 0) balanced = false;
  return balanced;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
