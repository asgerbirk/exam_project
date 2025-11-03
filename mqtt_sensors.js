function setup() {}

function draw() {
  if (orientationSensor.hasNewValue) {
    let gyro = orientationSensor.get();
    let alpha = gyro.alpha; // alpha, beta & gamma
    console.log(alpha);
    sender(alpha);
  }
}

const threshold = 10;
function touchStarted() {
  console.log("Touch registreret. Forsøger at opsætte orientering.");
  setupOrientation(threshold);
  console.log("Touch registreret. Forsøger at opsætte orientering.");
}
