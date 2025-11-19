let variantai = +prompt("Įveskite užduoties variantą.");
let a = +prompt("Įveskite a reikšmę.");
let b = +prompt("Įveskite b reikšmę.");

function jonukoProblem(variantai, a, b) {
  switch (variantai) {
    case 1:
      return a * b + 3;
    case 2:
      return a + b;
    case 3:
      return a - b;
    default:
      break;
  }
}

console.log(`Atsakimas: x = ${jonukoProblem(variantai, a, b)}`);