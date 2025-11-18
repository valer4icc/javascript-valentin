function isPowerOfTwo(num) {
  let number = Math.log(2) / Math.log(num);

  if (number % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
