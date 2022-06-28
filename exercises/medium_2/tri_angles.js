function isValidTriangle(a1, a2, a3) {
  return (a1 + a2 + a3 === 180) && [a1, a2, a3].every(angle => angle > 0);
}

function triangle(a1, a2, a3) {
  if (!isValidTriangle(a1, a2, a3)) {
    return 'invalid';
  } else if ([a1, a2, a3].includes(90)) {
    return 'right';
  } else if ([a1, a2, a3].every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
