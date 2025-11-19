let m = +prompt("Kiek sveria varlė?");
let n = +prompt("Kiek varlių norima stebėti?");

let totalweightg = m * n;

const weightg = 5000;

if (totalweightg > weightg) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}
