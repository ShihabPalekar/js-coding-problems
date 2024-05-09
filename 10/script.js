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
