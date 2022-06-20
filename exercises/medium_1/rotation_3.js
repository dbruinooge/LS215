function rotateRightmostDigits(number, digits) {
  let stringNum = String(number);
  let breakpoint = stringNum.length - digits;
  let front = stringNum.slice(0, breakpoint);
  let back = stringNum.slice(breakpoint + 1) + stringNum[breakpoint];
  return Number(front + back);
}

function maxRotation(number) {
  let stringNum = String(number);
  let len = stringNum.length;
  for (let i = len; i >= 1; i -= 1) {
    stringNum = rotateRightmostDigits(Number(stringNum), i);
  }

  return Number(stringNum);
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // the leading zero gets dropped
console.log(maxRotation(8703529146) == 7321609845);