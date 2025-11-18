function toDecimals(number, dec) {
  return (Math.round(number * 100) / 100).toFixed(dec);
}

console.log(toDecimals(2.100212, 2));
console.log(toDecimals(2.100212, 3));
console.log(toDecimals(2100, 5));
