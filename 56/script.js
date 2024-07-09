//my solution
function cockroachSpeed(s) {
  let cm = s * 100000;
  let secondsInHour = 3600;
  return Math.floor(cm / secondsInHour);
}

//better solution
const cockroachSpeed = s => Math.floor(s / 0.036);
