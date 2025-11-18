function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Error: Cannot divide by zero";
      }
      return a / b;
    default:
      return "Error: Invalid operator";
  }
}

console.log(`2 + 3 = ${calculate(2, 3, "+")}`);

console.log(`10 - 4 = ${calculate(10, 4, "-")}`);

console.log(`5 * 5 = ${calculate(5, 5, "*")}`);

console.log(`10 / 2 = ${calculate(10, 2, "/")}`);

console.log(`10 / 0 = ${calculate(10, 0, "/")}`);

console.log(`2 % 3 = ${calculate(2, 3, "%")}`);

console.log(`'a' + 3 = ${calculate("a", 3, "+")}`);
