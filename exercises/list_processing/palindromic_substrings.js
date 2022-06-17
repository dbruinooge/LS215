function leadingSubstrings(string) {
  return [...string].map((_, index, array) => {
    return array.slice(0, index + 1).join('');
  });
}


function substrings(string) {
  return [...string].map((_, index) => leadingSubstrings(string.slice(index)))
                    .flat();
}

function isPalindrome(string) {
  if (string.length < 2) return false;
  return [...string].reverse().join('') === string;
}

function palindromes(string) {
  let subs = substrings(string);
  return subs.filter(isPalindrome);
}

console.log(isPalindrome('ll'));
console.log(palindromes('abcd'));       // []

console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
