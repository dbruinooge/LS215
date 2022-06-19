function makeRows(numberOfRows, message) {
  let result = [];
  for (let i = 1; i <= numberOfRows; i += 1) {
    result.push([]);
  }
  message = message.replaceAll(' ', '').split('');
  let indexArray = makeIndexArray(numberOfRows, message.length);

  for (let index = 0; index < message.length; index += 1) {
    let currentRowIndex = indexArray.shift();
    let currentRow = result[currentRowIndex];
    let letter = message[index];
    addPeriods(currentRow, index);
    currentRow.push(letter);
  }

  return result;
}

function makeIndexArray(numberOfRows, numberOfLetters) {
  let result = [];
  let index = 0;
  while (true) {
    for (let i = 0; i < numberOfRows; i += 1) {
      result.push(i);
      index += 1;
      if (index === numberOfLetters) return result;
    }

    for (let i = numberOfRows - 2; i >= 1; i -= 1) {
      result.push(i);
      index += 1;
      if (index === numberOfLetters) return result;
    }
  }
}

function addPeriods(row, index) {
  let numberOfPeriods = index - row.length;
  for (let i = 0; i < numberOfPeriods; i += 1) {
    row.push('.');
  }
}

function encode(numberOfRows, string) {
  let rows = makeRows(numberOfRows, string);
  rows = rows.map(row => {
    return row.filter(char => char.match(/[a-z]/ig));
  });

  return rows.flat().join('');
}

function decode(numberOfRows, message) {
  let stars = '*'.repeat(message.length);
  let letters = message.split('');
  let diagram = makeRows(numberOfRows, stars);
  let decodedDiagram = diagram.map(row => {
    return row.map(char => {
      if (char === '*') {
        return letters.shift();
      } else {
        return char;
      }
    });
  });

  let result = '';
  let indexArray = makeIndexArray(numberOfRows, message.length);
  for (let i = 0; i < message.length; i += 1) {
    let rowIndex = indexArray.shift();
    let row = decodedDiagram[rowIndex];
    let char = '';
    while (!char.match(/[a-z]/gi)) {
      char = row.shift();
    }
    result += char;
  }
  return result;
}

console.log(encode(3, 'wearediscoveredfleeatonce'));   // wecrlteerdsoeefeaocaivden
console.log(decode(3, 'wecrlteerdsoeefeaocaivden'));   // wearediscoveredfleeatonce

let code = encode(5, 'omgthisissuchahardproblem');     // osrmmisadegsuhplticarbhho
console.log(code);
console.log(decode(5, 'osrmmisadegsuhplticarbhho'));   // omgthisissuchahardproblem
