// function drawRow(n, distance) {
//   let spaces = distance;
//   let stars = n - (spaces * 2);
//   console.log(' '.repeat(spaces) + '*'.repeat(stars));
// }

// function diamond(n) {
//   let maxDistance = Math.floor(n / 2);
//   for (let i = maxDistance; i >= -maxDistance; i -= 1) {
//     drawRow(n, Math.abs(i));
//   }
// }

function diamond(n) {
  const drawRow = ((n, distance) => {
    console.log(' '.repeat(distance) + '*'.repeat(n - (distance * 2)));
  });

  let maxDistance = Math.floor(n / 2);
  for (let distance = maxDistance; distance >= -maxDistance; distance -= 1) {
    drawRow(n, Math.abs(distance));
  }
}


//  *
// * *
//*   *
// * *
//  *

/*

   *
  * *
 *   *
*     *
 *   *
  * *
   *


if max distance, return one star
otherwise:
  star plus spaces (?) plus star
 - distance is 0, n is 7: 5 spaces
   distance is 1, n is 7: 3 spaces
   distance is 2, n is 7: 1 space
     n - 2 - (2 * distance)

*/



function hollowDiamond(n) {
  const drawRow = (n, distance) => {
    let stars = starString(n, distance);
    console.log(' '.repeat(distance) + stars);
  };

  const starString = (n, distance) => {
    let spaces = n - 2 - (2 * distance);
    if (spaces <= 0) return '*';
    return '*' + ' '.repeat(spaces) + '*';
  };

  let maxDistance = Math.floor(n / 2);
  for (let distance = maxDistance; distance >= -maxDistance; distance -= 1) {
    drawRow(n, Math.abs(distance));
  }
}

// diamond(9);
// diamond(15);
// diamond(3);
// diamond(1);

hollowDiamond(9);
hollowDiamond(15);
hollowDiamond(3);
hollowDiamond(1);