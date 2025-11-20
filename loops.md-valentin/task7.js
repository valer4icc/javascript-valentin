let n = parseInt(prompt("veskite skaičiai"));

function factors(n) {
  let number = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      number.push(i);
      if (n / i !== i) {
        number.push(n / i);
      }
    }
  }
  number.sort((a, b) => a - b);
  return number;
}

console.log(factors(n));
