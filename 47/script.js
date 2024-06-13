function removeSmallest(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const smallestIndex = numbers.indexOf(sorted[0]);

  // This works but the condition is that we cannot mutate the org array and splce mutates the org array
  // numbers.splice(smallestIndex, 1);

  const answer = numbers.filter((i, idx) => idx !== smallestIndex);

  return answer;
}

//other solutions
function removeSmallest2(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest3(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

const removeSmallest4 = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
