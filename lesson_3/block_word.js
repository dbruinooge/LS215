function blockWord(word) {
  const BLOCKS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW',
                   'HU', 'VI', 'LY', 'ZM'];
  let wordArray = word.toUpperCase().split('');
  for (let index = 0; index < wordArray.length; index += 1) {
    let letter = wordArray[index];
    let blockIndex = BLOCKS.findIndex(block => block.includes(letter));

    if (blockIndex === -1) {
      return false;
    } else {
    BLOCKS.splice(blockIndex, 1);
    }
  }
  return true;
}

function isBlockWord(word) {
  console.log(blockWord(word));
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true