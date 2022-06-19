/*
3:40 - 4:00
--------------------- Problem ----------------------

------------ **Explicit Requirements** -------------
-  Rules: Each letter is encrypted, or right-shifted, by X places in the alphabet,
          where X is the key (shift value).
          Non-letters are left as is.
          Letters and encrypted versions should be of the same case.
          If the key is 26 or higher, the alphabet wraps around.
- Inputs: unencrypted string, integer key
- Output: encrypted string

------------ **Implicit Requirements** -------------

------------- **Clarifying Questions** -------------
Other types of input? (empty string, numbers, boolean, undefined, etc.)

------------ Examples/Test Cases/Edge's ------------

------------------ Data Structure ------------------
2 arrays of letters (lower and upper), used for index values
output string

-------------------- Algorithm ---------------------
initialize two arrays of letters, LOWER and UPPER
initialize empty result string
convert input to array of characters, map as below
  - check if the character is a lowercase letter
    - get the index of the letter from the LOWER array
    - add key to the index
    - get the letter from the LOWER array at the sum index
    - concatenate the letter to the result string

    - check if the letter is an uppercase letter, same procedure as above
       - UPPER array

    - if neither (not a letter), just add the character as-is

return result string

---------------------- Notes -----------------------

*/

function caesarEncrypt(string, key) {
  const LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let mapped = string.split('').map(char => {
    if (UPPERS.includes(char)) {
      let index = UPPERS.indexOf(char);
      let newIndex = (index + key) % 26;
      return UPPERS[newIndex];
    } else if (LOWERS.includes(char)) {
      let index = LOWERS.indexOf(char);
      let newIndex = (index + key) % 26;
      return LOWERS[newIndex];
    } else {
      return char;
    }
  });

  return mapped.join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"