function randomInteger(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomInteger(0, 1));
console.log(randomInteger(0, 100));
console.log(randomInteger(5, 20));
