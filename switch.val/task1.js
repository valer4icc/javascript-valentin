function daysUntilWeekend(day) {
  
  switch (day.toLowerCase()) {
    case "saturday":
      return 0;
    case "sunday":
      return 6;
    case "monday":
      return 5;
    case "tuesday":
      return 4;
    case "wednesday":
      return 3;
    case "thursday":
      return 2;
    case "friday":
      return 1;
    default:
      return "Invalid day";
  }
}
 
console.log(`sunday ${daysUntilWeekend("sunday")}`);
console.log(`monday ${daysUntilWeekend("monday")}`);
console.log(`tuesday ${daysUntilWeekend("tuesday")}`);
console.log(`wednesday ${daysUntilWeekend("wednesday")}`);   
console.log(`thursday ${daysUntilWeekend("thursday")}`);
console.log(`friday ${daysUntilWeekend("friday")}`);
