let num1 = parseInt(prompt("veskite pirma skaičiai"));
let num2 = parseInt(prompt("veskite antra skaičiai"));

function makeBox(num1, num2) {
  let box = "";
  for (let i = 0; i < num2; i++) {
    if (i === 0 || i === num2 - 1) {
      for (let j = 0; j < num1; j++) {
        box += "*";
      }
    } else {
      for (let j = 0; j < num1; j++) {
        if (j === 0 || j === num1 - 1) {
          box += "*";
        } else {
          box += " ";
        }
      }
    }

    if (i < num2 - 1) {
      box += " ";
    }
  }
  return box;
}

console.log(makeBox(num1, num2));
