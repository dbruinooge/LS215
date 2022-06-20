/* time: 5:23, 5:37

--------------------- Problem ----------------------

------------ **Explicit Requirements** -------------
-  Rules: write a function that displays an 8 pointed star
          with width and height of n (argument to the function)
- Inputs: integer
- Output: logging to the console
------------ **Implicit Requirements** -------------
line 1: 0 spaces, 2 spaces, 2 spaces, 0 spaces
line 2: 1 space, 1 space, 1 space, 1 space
line 3: 2 spaces, 0 spaces, 0 spaces, 2 spaces

end spaces go from 0 to height - 1
middle spaces go from height - 1 to 0

------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
-  Visual Reference:
------------------ Data Structure ------------------
store in an array
-------------------- Algorithm ---------------------

initialize height to n / 2 (rounded down)
initialize endSpaces to 0
initializes middleSpaces to height - 1
intialize result array

height times:
  endSpaces, star, middleSpaces, star, middleSpaces, star, endSpaces
  increment endSpaces
  decrement middleSpaces

top: log each element of the array
middle: log n stars
bottom: reverse array and log each element

              **** helper functions ****

---------------------- Notes -----------------------

*/

function star(n) {
  let height = Math.floor(n / 2);
  let middleSpaces = height - 1;
  let result = [];

  for (let endSpaces = 0; endSpaces < height; endSpaces += 1) {
    result.push(' '.repeat(endSpaces) + '*' + ' '.repeat(middleSpaces)
                + '*' + ' '.repeat(middleSpaces) + '*');
    middleSpaces -= 1;
  }

  result.forEach(line => console.log(line));
  console.log('*'.repeat(n));
  result.reverse().forEach(line => console.log(line));
}

star(7);
// logs
// *  *  *
// * * *
//   ***
// *******
//   ***
// * * *
// *  *  *
console.log('\n');
star(9);
// logs
// *   *   *
// *  *  *
//   * * *
//   ***
// *********
//   ***
//   * * *
// *  *  *
// *   *   *