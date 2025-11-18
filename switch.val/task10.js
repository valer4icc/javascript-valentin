function symbolFinder(simbol) {
  switch (simbol) {
    case "USD","Usd","usd":
      console.log("$");
      break;
    case "EUR","Eur","eur":
      console.log("€");
      break;
    case "GBP","Gbp","gbp":
      console.log("£");
      break;
    case "JPY","Jpy","jpy":
      console.log("¥");
      break;
    case "CHF","Chf","chf":
      console.log("Fr");
      break;
    default:
      console.log("Not found");
      break;
  }
}

console.log(symbolFinder("usd"))