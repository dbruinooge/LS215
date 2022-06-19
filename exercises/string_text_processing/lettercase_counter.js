function letterCaseCount(string) {
  let lowercaseMatches = string.match(/[a-z]/g) || 0;
  let lowercase = lowercaseMatches && lowercaseMatches.length; 
  let uppercaseMatches = string.match(/[A-Z]/g) || 0;
  let uppercase = uppercaseMatches && uppercaseMatches.length;
  let neither = string.length - lowercase - uppercase;
  return { lowercase, uppercase, neither };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
