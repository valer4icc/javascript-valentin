function remainderOf(num1, num2) {
  let left = Math.round(num1 % num2);
  return left;
}
console.log(remainderOf(10, 1));
console.log(remainderOf(10, 2));
console.log(remainderOf(10, 3));
console.log(remainderOf(10, 4));
console.log(remainderOf(129, 17));