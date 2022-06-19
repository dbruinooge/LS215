/*

We have n number of lights. They are all off to begin.
We make n number of passes. On each pass, we flip lights that are a multiple of n.
After all passes are completed, return an array of light numbers that are on.

data structure: object where properties are integers from 1 to n, and property values
   are booleans (true = on, false = off)

initialize the light object with the appropriate number of lights
iterate over the lights n times
 on the nth pass, switch a light if it is a multiple of nth

 check the object to see which lights are on (have value of true),
   collect those keys into an array and return the array

*/

function lightsOn(switches) {
  let lights = {};
  for (let i = 1; i <= switches; i += 1) {
    lights[i] = false;
  }

  for (let i = 1; i <= switches; i += 1) {
    for (let light in lights) {
      if (Number(light) % i === 0) {
        lights[light] = !lights[light];
      }
    }
  }
  return Object.keys(lights)
               .filter(light => lights[light] === true)
               .map(Number);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1]
console.log(lightsOn(3)); // [1]

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

