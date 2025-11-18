function runCommand(cmd) {
  switch (cmd) {
    case "start":
      console.log("Starting...");
      break;
    case "stop":
      console.log("Stopping...");
      break;
    case "pause":
      console.log("Pausing...");
      break;
    case "resume":
      console.log("Resuming...");
      break;
    default:
      console.log("Unknown command");

      break;
  }
}