function DaysInMonth(month) {
  let days;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    case 2:
      days = 28;
      break;

    default:
      days = 0;
      console.error("Invalid month number: " + month);
  }

  return days;
}

console.log(`January (1) has ${DaysInMonth(1)} days.`);
console.log(`February (2) has ${DaysInMonth(2)} days.`);
console.log(`April (4) has ${DaysInMonth(4)} days.`);
console.log(`December (12) has ${DaysInMonth(12)} days.`);

