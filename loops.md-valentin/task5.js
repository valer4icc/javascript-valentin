function numberJoinerFancy(num1, num2, simvol = "_") {
  let result = "";

  for (let currentNumber = num1; currentNumber <= num2; currentNumber++) {
    result += currentNumber;

    if (currentNumber < num2) {
      result += simvol;
    }
  }

  return result;
}

console.log(numberJoinerFancy(1, 10));
console.log(numberJoinerFancy(1, 10, "~"));
console.log(numberJoinerFancy(3, 6, "_VIKTOR"));
