function staggeredCase(string) {
  let index = 0;
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (char.match(/[a-z]/gi)) {
      result += index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      index += 1;
    } else {
      result += char;
    }
  }
  
  return result;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"