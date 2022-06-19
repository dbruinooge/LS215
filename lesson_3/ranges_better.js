function normalizeNumbers(string) {
  const rangeToken = '-';
  string = string.replaceAll(/\s/g, '');
  string = string.replaceAll(/(:|\.\.|-)/g, `,${rangeToken},`);

  let list = [];
  let isRange = false;
  let tokens = string.split(',');

  for (let token of tokens) {
    if (token === rangeToken) {
      isRange = true;
      continue;
    }

    nextHigher(list, token, isRange);
    isRange = false;
  }

  return list;

}

function nextHigher(list, suffixStr, isRange = false) {
  let candidate = (list[list.length - 1] || 0) + 1;
  while (!String(candidate).endsWith(suffixStr)) {
    if (isRange) {
      list.push(candidate);
    }
    candidate += 1;
  }
  list.push(candidate);
}

console.log(normalizeNumbers('1, 5, 2-4, 3'));     // 1, 5, 12, 13, 14, 23
console.log(normalizeNumbers('1, 3, 7, 2, 4, 1')); // 1, 3, 7, 12, 14, 21
console.log(normalizeNumbers('1-3, 1-2'));         // 1, 2, 3, 11, 12
console.log(normalizeNumbers('1:5:2'));            // 1, 2, 3, 4, 5, 6, ... 12
console.log(normalizeNumbers('104-2'));            // 104, 105, ... 112
console.log(normalizeNumbers('104-02'));           // 104, 105, ... 202
console.log(normalizeNumbers('545, 64:11'));       // 545, 564, 565, .. 611