function maxSubarraySum(array, n) {
    // [4,2,1,6,2] n=4  //13
    if (n > array.length) {
      return undefined;
    }
    let max = -Infinity;
    for (let i = 0; i < array.length - n; i++) {
      let sum = 0;
      for (let j = i; j < i + n; j++) {
        sum += array[j];
      }
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }
  
  console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
  