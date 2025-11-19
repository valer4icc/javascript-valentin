// let a = +prompt("Įveskite kainas a");
// let b = +prompt("Įveskite kainas b");
// let n1 = +prompt("Įveskite kiekius n1");
// let n2 = +prompt("Įveskite kiekius n2");
// let n3 = +prompt("Įveskite kiekius n3");
let a = 1.50;
let b = 1.70;
let n1 = 3;
let n2 = 2;
let n3 = 1;
let price = +prompt("Įveskite bandelės kainą");

function baget(a, b, n1, n2, n3, price) {
  if (price <= a) {
    return `Už bandeles bus sumokėta: ${Math.round((price * n1)*100)/100 }`;
  } else if (a < price && price < b) {
    return `Už bandeles bus sumokėta: ${Math.round((price * n2)*100)/100 }`;
  } else {
    return `Už bandeles bus sumokėta: ${Math.round((price * n3)*100)/100 }`;
  }
}

console.log(baget(a, b, n1, n2, n3, price));



