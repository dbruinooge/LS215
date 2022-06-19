// validate each function number - if either is invalid, return null
// otherwise, compare and return 1, -1 or 0 as appropriate

// comparing version numbers
// if the two strings are equal, return 0

// split on '.' - get an array of numbers
// compare the two arrays one index at a time. if at any point one number is less than the other
// that is a lesser version

// if one array returns undefined
// it is lesser if the other array has any values greater than 0, otherwise return 0



// we have a series of numbers separated by points.
// we compare the two versions, one number at a time.
// if at any point, the number of version 1 is greater than version 2, we know that
//   version 1 is a higher version number.
// if the two versions contain different numbers of numbers,
//   and their numbers are the same up to the point where the shorter version ends,
//   the longer version is a higher version if any of its additional numbers are greater than 0
//   otherwise, the two versions are the same.

function compareVersions(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) return null;

  let array1 = version1.split('.').map(Number);
  let array2 = version2.split('.').map(Number);

  let i = 0;
  while (array1[i] !== undefined || array2[i] !== undefined) {
    if (array1[i] === undefined) {
      if (array2.slice(i).some(num => num > 0)) {
        return -1;
      }
    } else if (array2[i] === undefined) {
      if (array1.slice(i).some(num => num > 0)) {
        return 1;
      }
    } else if (array1[i] > array2[i]) {
      return 1;
    } else if (array2[i] > array1[i]) {
      return -1;
    }

    i += 1;
  }

  return 0;

}

function invalidVersion(version) {
  if (version[0] === '.' || version[version.length - 1] === '.') return true;
  return !!version.match(/(\.\.|[^.0-9])/);
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

console.log(compareVersions('1.1', '1'));         // 1
console.log(compareVersions('1.2.0.0', '13.37')); // -1
console.log(compareVersions('1.18.2', '1.2'));    // 1
console.log(compareVersions('1.2.0.0', '1.2'));   // 0
console.log(compareVersions('3.0.0.0.0.0', '3')); // 0
console.log(compareVersions('3..0', 3));          // null
console.log(compareVersions('a3.0', '3.0.0'));    // null
console.log(compareVersions('.3', '0.3'));        // null
console.log(compareVersions('5.4', '5.4.'));      // null
console.log(compareVersions(' 3.0', '3.0'));      // null
console.log(compareVersions('2. 0', '5.0'));      // null


let versions = ['1.18.2', '1', '1.0', '1.1', '1.2', '0.1', '1.2.0.0', '13.37'];

versions.sort(compareVersions);

console.log(versions);
