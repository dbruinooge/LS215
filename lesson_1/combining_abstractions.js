// let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

// let firstLetters = names.map(name => name[0].toLowerCase());

// function count(value, array) {
//   let number = 0;
  
//   array.forEach(element => {
//     if (element === value) number += 1; 
//   });
  
//   return number;
// }

// function tally(array) {
//   let counts = {};
  
//   array.forEach(value => {
//     if (!Object.keys(counts).includes(value)) {
//       counts[value] = count(value, array);
//     }
//   });
  
//   return counts;
// }

// let letterTallies = tally(firstLetters);

// let max = Object.keys(letterTallies).sort((a, b) => {
//   return letterTallies[b] - letterTallies[a];
// })[0];

// console.log(max);

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

let letters = names.map(name => name[0]);

let counts = letters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

let letter = Object.keys(counts).reduce((lastLetter, currentLetter) => {
  if (counts[lastLetter] > counts[currentLetter]) {
    return lastLetter;
  }
  return currentLetter;
});

console.log(letter);