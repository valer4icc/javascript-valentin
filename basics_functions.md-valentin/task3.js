function calcArea(a, b, c) {
  let s = (a + b + c) / 2;

  let area = Number.parseFloat(
    Math.sqrt(s * (s - a) * (s - b) * (s - c))
  ).toFixed(2);

  return area;
}

console.log(calcArea(5, 6, 7));