function enough(cap, on, wait) {
  let remainingSeats = cap - on;
  if (remainingSeats > wait) {
    return 0;
  } else {
    return wait - remainingSeats;
  }
}
