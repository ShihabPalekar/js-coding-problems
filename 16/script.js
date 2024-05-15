function digitize(n) {
  return n
    .toString()
    .split("")
    .map((i) => Number(i))
    .reverse();
}
