function isValidTriangle(s1, s2, s3) {
  let sortedSides = [s1, s2, s3].sort((b, a) => b - a);
  return sortedSides[0] + sortedSides[1] > sortedSides[2] &&
         sortedSides.every(side => side > 0);
}

function triangle(s1, s2, s3) {
  if (!isValidTriangle(s1, s2, s3)) {
    return 'invalid';
  } else if (s1 === s2 && s2 === s3) {
    return 'equilateral';
  } else if (s1 === s2 || s2 === s3 || s3 === s1) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
