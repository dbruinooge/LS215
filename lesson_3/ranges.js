function normalizeNumbers(string) {
  let array = string.split(', ');
  let result = [];
  array.forEach((ele, idx) => {
    let prev = result[result.length - 1];
    if (ele.match(/[\-:.]+/)) {
      result = result.concat(expandRange(ele, prev));
    } else {
      result.push(fixNumber(prev, ele));
    }
  });

  return result.join(', ');
}

function fixNumber(prev, curr) {
  prev = prev === undefined ? -Infinity : prev;
  let num = 0;
  if (Number(curr) > Number(prev)) {
    return curr;
  }

  for (let prefix = 1; ; prefix += 1) {
    num = Number(String(prefix) + String(curr));
    if (num > Number(prev)) {
      return String(num);
    }
  }
}

function expandRange(range, prevMain) {
  prevMain = prevMain === undefined ? -Infinity : prevMain;
  let array = range.split(/[.:\-]+/);
  let result = [];
  array.forEach((num, idx) => {
    if (idx === 0) {
      result.push(fixNumber(prevMain, num));
      return;
    }

    let prevRange = result[result.length - 1];
    num = fixNumber(prevRange, num);
    if (Number(num) - Number(prevRange) > 1) {
      result = result.concat(middleNumbers(prevRange, num));
      result.push(num);
    } else {
      result.push(num);
    }

  });

  return result;
}

function middleNumbers(prev, curr) {
  let result = [];
  for (let i = Number(prev) + 1; i < Number(curr); i += 1) {
    result.push(String(i));
  }

  return result;
}

console.log(normalizeNumbers('1, 5, 2-4, 3'));     // 1, 5, 12, 13, 14, 23
console.log(normalizeNumbers('1, 3, 7, 2, 4, 1')); // 1, 3, 7, 12, 14, 21
console.log(normalizeNumbers('1-3, 1-2'));         // 1, 2, 3, 11, 12
console.log(normalizeNumbers('1:5:2'));            // 1, 2, 3, 4, 5, 6, ... 12
console.log(normalizeNumbers('104-2'));            // 104, 105, ... 112
console.log(normalizeNumbers('104-02'));           // 104, 105, ... 202
console.log(normalizeNumbers('545, 64:11'));       // 545, 564, 565, .. 611