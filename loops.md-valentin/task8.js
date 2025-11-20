let n = parseInt(prompt("veskite skaičiai"));

function makeSquare(n) {
  const line = "*".repeat(n);

  return Array(n).fill(line).join("\n");
}

console.log(makeSquare(5));
