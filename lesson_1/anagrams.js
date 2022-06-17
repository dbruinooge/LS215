// function anagram(word, list) {
//   let key = word.split('').sort().join('');
//   return list.filter(candidate => key === candidate.split('').sort().join(''));
// }

function anagram(word, list) {
  return list.filter(candidate => isAnagram(candidate, word));
}

function isAnagram(word1, word2) {
  let letters1 = word1.split('').sort();
  let letters2 = word2.split('').sort();
  
  if (letters1.length !== letters2.length) return false;
  
  return letters1.every((letter, index) => letter === letters2[index]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
