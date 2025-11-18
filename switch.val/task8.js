function temperatureRange(temp) {
  switch (true) {
    case temp < 0:
      console.log("Freezing");

      break;
    case 0 <= temp && temp <= 10:
      console.log("Cold");
      break;
    case 11 <= temp && temp <= 20:
      console.log("Mild");
      break;
    case 21 <= temp && temp <= 30:
      console.log("Warm");
      break;
    case 30 < temp:
      console.log("Hot");
      break;
    default:
      break;
  }
}

console.log(temperatureRange(31))