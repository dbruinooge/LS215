function letterPercentages(string) {
  let lowercase = (string.match(/[a-z]/g) || []).length;
  let uppercase = (string.match(/[A-Z]/g) || []).length;
  let neither = string.length - lowercase - uppercase;

  lowercase = (lowercase / string.length * 100).toFixed(2);
  uppercase = (uppercase / string.length * 100).toFixed(2);
  neither = (neither / string.length * 100).toFixed(2);

  return { lowercase, uppercase, neither };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
