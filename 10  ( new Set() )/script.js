//Without using Set
function uniqueValues(arr) {
  const uniqueArr = [];
  
  arr.forEach(element => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });
  
  return uniqueArr;
}

//With using Set
function uniqueValuesSet(arr) {
  return [...new Set(arr)];
}

//Without using array.includes
function uniqueValues2(arr) {
  const uniqueArr = [];
  const seen = {};
  
  arr.forEach(element => {
    if (!seen[element]) {
      seen[element] = true;
      uniqueArr.push(element);
    }
  });
  
  return uniqueArr;
}
