function maxSubaraySum(array, n){
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
