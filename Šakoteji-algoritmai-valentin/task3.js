let num1 = +prompt("Koki pažymi gavo Petriukas?");
let num2 = +prompt("Koki antra pažymi gavo Petriukas?");
let num3 = +prompt("Koki trečia pažymi gavo Petriukas?");
let num4 = +prompt("Koki ketvirta pažymi gavo Petriukas?");
let num5 = +prompt("Koki penkta pažymi gavo Petriukas?");

function calculateCandies(num1, num2, num3, num4, num5) {
  let numbers = [num1, num2, num3, num4, num5];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let avg = sum / numbers.length;

  if (avg > 9) {
    candies = "Petriukas gaus tris saldainius";
  } else if (avg >= 7 && avg <= 9) {
    candies = "Petriukas gaus du saldainius";
  } else if (7 > avg) {
    candies = "Petriukas gaus vieną saldainį";
  }

  return candies;
}

console.log(calculateCandies(num1, num2, num3, num4, num5));
