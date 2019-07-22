function countUniqueValuesInSortedArray2(array) {
    let i = 0;
    let j = i + 1;
    for (; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  }
  let array = [-1, 0, 1, 1, 1, 1, 2, 2, 3, 6, 7, 9, 9];
  console.log(countUniqueValuesInSortedArray(array));
  