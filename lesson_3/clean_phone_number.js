function cleanPhoneNumber(string) {
  let cleaned = string.replace(/[^0-9]/g, '');
  if (cleaned.length === 10) return cleaned;
  if (cleaned.length === 11 && cleaned[0] === '1') return cleaned.slice(1);
  return '0'.repeat(10);
}

console.log(cleanPhoneNumber('1234567890'));    // 1234567899
console.log(cleanPhoneNumber('12345678900'));   // 2345678900
console.log(cleanPhoneNumber('23456789000'));   // 0000000000
console.log(cleanPhoneNumber('a1234567890'));   // 1234567890
console.log(cleanPhoneNumber('12345'));         // 0000000000
console.log(cleanPhoneNumber('as12312312312')); // 2312312312
console.log(cleanPhoneNumber('b23423423423'));  // 0000000000
