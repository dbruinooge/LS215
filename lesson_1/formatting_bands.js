let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    return {
      name: cleanupName(band.name),
      country: 'Canada',
      active: band.active,
    };
  });
}

function cleanupName(name) {
  name = name.replace('.', '');
  return name.split(' ').map(part => capitalize(part)).join(' ');
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

let processed = processBands(bands);
console.log(processed);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]