function pairWithSumZeroInSortedArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          return [array[i], array[j]];
        }
      }
    }
  }
  
  console.log( pairWithSumZeroInSortedArray([-4, -3, -2, -1, 0, 1, 2, 5]) );
  
