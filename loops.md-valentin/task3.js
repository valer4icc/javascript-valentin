let one = parseInt(prompt("veskite pirma skaičiai"));
let two = parseInt(prompt("veskite antra skaičiai"));

function numberJoinerWhile(one, two) {
  let currentNumber = one;
  let result = "";

  while (currentNumber <= two) {
    result += currentNumber;

    if (currentNumber < two) {
      result += "_";
    }

    currentNumber++;
  }

  return result;
}

console.log(numberJoinerWhile(one, two));
