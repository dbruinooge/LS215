function totalArea(rectangles) {
  let mapped = rectangles.map(([side1, side2]) => side1 * side2);
  return mapped.reduce((sum, number) => sum + number);
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(([side1, side2]) => side1 === side2);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

console.log(totalSquareArea(rectangles));    // 121