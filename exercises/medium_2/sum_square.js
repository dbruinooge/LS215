function sumSquareDifference(n) {
 return squareOfSum(n) - sumOfSquares(n);
}

function sumOfSquares(n) {
  if (n <= 1) {
    return 1;
  } else {
    return (n ** 2) + sumOfSquares(n - 1);
  }
}

function squareOfSum(n) {
  return sum(n) ** 2;
}

function sum(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
