let one = parseInt(prompt("veskite pirma skaičiai"));
let two = parseInt(prompt("veskite antra skaičiai"));

function numberJoinerFor(one, two) {
  let result = '';

  for (let currentNumber = one; currentNumber <= two; currentNumber++) {
    result += currentNumber;


    if (currentNumber < two) {
      result += '_';
    }
  }

  return result;
}


console.log(numberJoinerFor(one, two)); 

