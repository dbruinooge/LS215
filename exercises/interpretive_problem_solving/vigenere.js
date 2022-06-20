function vigenere(string, keyword) {
  const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let shiftValues = keyword.toLowerCase().split('').map(letter => {
    return LOWERS.indexOf(letter);
  });
  let shiftIndex = 0;

  let mapped = string.split('').map(char => {
    if (UPPERS.includes(char)) {
      let letterIndex = UPPERS.indexOf(char);
      let shiftValue = shiftValues[shiftIndex];
      let newIndex = (letterIndex + shiftValue) % 26;
      shiftIndex = (shiftIndex + 1) % shiftValues.length;
      return UPPERS[newIndex];
    } else if (LOWERS.includes(char)) {
      let letterIndex = LOWERS.indexOf(char);
      let shiftValue = shiftValues[shiftIndex];
      let newIndex = (letterIndex + shiftValue) % 26;
      shiftIndex = (shiftIndex + 1) % shiftValues.length;
      return LOWERS[newIndex];
    } else {
      return char;
    }
  });

  return mapped.join('');
}

console.log(vigenere('Pineapples don\'t go on pizzas!', 'meat') === 'Bmnxmtpeqw dhz\'x gh ar pbldal!'); //
console.log(vigenere('Pineapples don\'t go on pizzas!', 'A') === 'Pineapples don\'t go on pizzas!');
console.log(vigenere('Pineapples don\'t go on pizzas!', 'Aa') === 'Pineapples don\'t go on pizzas!');
console.log(vigenere('Pineapples don\'t go on pizzas!', 'cab') === 'Riogaqrlfu dpp\'t hq oo riabat!');
console.log(vigenere('Dog', 'Rabbit') === 'Uoh');
