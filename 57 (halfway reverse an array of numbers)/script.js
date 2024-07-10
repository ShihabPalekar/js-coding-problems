function reverseSecondHalf(array) {
  // Calculate the midpoint of the array
  //If round down, ie 4.something should give 4, use Math.floor
  //If round up, ie 4.something should give 5, use Math.ceil
  const midpoint = Math.floor(array.length / 2);

  // Create a copy of the first half and the second half of the array
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);
  // Reverse the second half
  const reversedSecondHalf = secondHalf.reverse();

  // Combine the first half with the reversed second half
  return [...firstHalf, ...reversedSecondHalf];
}
