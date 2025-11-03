function setup() {
  createCanvas(windowWidth, windowHeight); // Opretter et canvas
}

function draw() {
  // --- Aktiveret visuel feedback ---
  background(220); // Giver baggrundsfarve
  textSize(24);
  text("MQTT: OK", 10, 30); // Viser, at MQTT er forbundet

  if (orientationSensor.hasNewValue) {
    let gyro = orientationSensor.get();
    let alpha = gyro.alpha;

    // VISUEL FEEDBACK:
    text("Alpha: " + nfc(alpha, 2), 10, 60); // Viser Alpha-værdien

    console.log(alpha);
    sender(alpha);
  } else {
    text("Status: Tryk for at aktivere sensor", 10, 90); // Viser instruktion
  }
}
const threshold = 10;
function touchStarted() {
  setupOrientation(threshold);
  console.log("Touch started! Forsøger at få sensor-tilladelse.");
}
