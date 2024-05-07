function duplicateCount(text) {
  const charCount = {};

  // Count occurrences of each character
  for (const char of text.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count characters that occur more than once
  let duplicateCount = 0;
  for (const count of Object.values(charCount)) {
    if (count > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}
