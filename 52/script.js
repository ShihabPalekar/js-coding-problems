//my solutions
const isAnagram = (a, b) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }
};

const isAnagram2 = (a, b) => {
  if (a.trim().length !== b.trim().length){
    return false
  }
  return a.trim().split("").sort().join("") === b.trim().split("").sort().join("")
}


//ChatGPT
const isAnagram3 = (str1, str2) => {
  const sanitizeString = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

  str1 = sanitizeString(str1);
  str2 = sanitizeString(str2);

  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

function areAnagrams(str1, str2) {
  // Helper function to clean and sort a string
  function cleanString(str) {
    return str
      .replace(/[^a-z]/gi, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }

  // Clean and sort both strings
  const cleanedStr1 = cleanString(str1);
  const cleanedStr2 = cleanString(str2);

  // Compare the cleaned and sorted strings
  return cleanedStr1 === cleanedStr2;
}
