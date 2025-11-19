let count1 = parseInt(
  prompt("veskite kiek kiekvienos rūšies paukščių liko žiemoti 1")
);
let count2 = parseInt(
  prompt("veskite kiek kiekvienos rūšies paukščių liko žiemoti 2")
);
let count3 = parseInt(
  prompt("veskite kiek kiekvienos rūšies paukščių liko žiemoti 3")
);

function BirdCounts() {
  if (isNaN(count1) || isNaN(count2) || isNaN(count3)) {
    console.log("TIK SKAIČIAI");
    return;
  }

  const counts = [count1, count2, count3];

  counts.sort(function (a, b) {
    return b - a;
  });

  const largest = counts[0];
  const smallest = counts[counts.length - 1];
  const difference = largest - smallest;

  console.log("Didžiausia:", largest);
  console.log("Mažiausia:", smallest);
  console.log("Skirtumas tarp didžiausio ir mažiausio kiekio:", difference);
}

BirdCounts();
