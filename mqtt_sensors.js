const threshold = 10;

function setup() {}

function draw() {
  // --- Aktiveret visuel feedback ---
  background(220);
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
function touchStarted() {
  setupOrientation(threshold);
  // TILFØJ DENNE LINJE:
  background(255, 0, 0); // Gør baggrunden RØD, når funktionen kører
  console.log("Touch started! Forsøger at få sensor-tilladelse.");
}
