function runTask() {
  const now = new Date();

  // Convert to CAT (UTC+2)
  const hoursCAT = (now.getUTCHours() + 2) % 24;
  const minutes = now.getUTCMinutes(); // Minutes stay the same for UTC offset

  if (hoursCAT >= 8 && hoursCAT < 20) {
    console.log(`Running task at: ${hoursCAT}:${minutes.toString().padStart(2, '0')} CAT`);
    // Your task logic here
  } else {
    console.log("Outside allowed time window");
  }
}

// Run every 5 seconds
setInterval(runTask, 5000);