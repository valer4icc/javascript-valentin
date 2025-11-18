function TrafficLight(color) {

  const normalizedColor = color.toLowerCase();
  let action;

  switch (normalizedColor) {
    case "red":
      action = "Stop";
      break;
    case "yellow":
      action = "Proceed with caution or prepare to stop";
      break;
    case "green":
      action = "Go";
      break;
    default:
      action = "Unknown light";
      console.error(`Unrecognized traffic light color: ${color}`);
  }

  return action;
}

console.log(`If the light is "red", you should: ${TrafficLight("red")}`);
console.log(`If the light is "yellow", you should: ${TrafficLight("yellow")}`);
console.log(`If the light is "green", you should: ${TrafficLight("green")}`);
console.log(`If the light is "ARMAGEDON", you should: ${TrafficLight("ARMAGEDON")}`);