function reverseSecondHalf(array) {
  // Calculate the midpoint of the array
  //If round down, ie 4.something should give 4, use Math.floor
  //If round up, ie 4.something should give 5, use Math.ceil
  const midpoint = Math.floor(array.length / 2);

  // Create a copy of the first half and the second half of the array
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);

  // Sort the second half
  secondHalf.sort((a, b) => a - b); // Use (a, b) => a - b for ascending order

  // Combine the first half with the sorted second half
  return [...firstHalf, ...secondHalf];
}
