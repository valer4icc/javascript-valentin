
let gcd = (a, b) => {
  let min = Math.min(a, b);
  let res = 0;
  for (let i = 1; i <= min; i++) {
    if (a % i == 0 && b % i == 0) {
      res = i;
    }
  }
  return res;
};

console.log(gcd(3, 15));
console.log(gcd(50, 20));


