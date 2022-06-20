function rotateRightmostDigits(number, digits) {
  let stringNum = String(number);
  let breakpoint = stringNum.length - digits;
  let front = stringNum.slice(0, breakpoint);
  let back = stringNum.slice(breakpoint + 1) + stringNum[breakpoint];
  return front + back;
}

console.log(rotateRightmostDigits(735291, 1) == 735291);
console.log(rotateRightmostDigits(735291, 2) == 735219);
console.log(rotateRightmostDigits(735291, 3) == 735912);
console.log(rotateRightmostDigits(735291, 4) == 732915);
console.log(rotateRightmostDigits(735291, 5) == 752913);
console.log(rotateRightmostDigits(735291, 6) == 352917);
