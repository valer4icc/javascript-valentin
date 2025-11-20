function sumOfRange(a, b) {
  let sum = 0;

  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfRange(1, 5));
console.log(sumOfRange(-3, 4));

