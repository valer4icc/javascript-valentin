let h = +prompt("Iš kokio aukščio šoka parašiutininkas?");
let t = +prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?");

function ParachuteDeploy(h, t) {
  const g = 9.8;

  const fall = Math.sqrt((2 * h) / g);

  if (t < fall) {
    return "Parašiutas išsiskleis";
  } else {
    return "Parašiutas neišsiskleis";
  }
}


console.log(ParachuteDeploy(h, t));
