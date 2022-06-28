// function fridayThe13ths(year) {
//   let today = new Date(year, 0, 1);
//   let count = 0;
//   while (today.getFullYear() === year) {
//     if (today.getDay() === 5 && today.getDate() === 13) count += 1;
//     today.setDate(today.getDate() + 1);
//   }

//   return count;
// }

function fridayThe13ths(year) {
  let dates = [];
  for (let i = 0; i < 12; i += 1) {
    dates.push(new Date(year, i, 13));
  }

  return dates.reduce((count, date) => {
    if (date.getDay() === 5) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
