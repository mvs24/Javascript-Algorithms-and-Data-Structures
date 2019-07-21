function pairWithSumZeroInSortedArray(array) {
  let result = [];
  let i = 0;
  let j = array.length - 1;
  while(j >= i){
    if(array[i] + array[j] > 0) {
        j--;
    }else if(array[i] + array[j] < 0) {
        i++;
    }else{
        result.push(array[i]);
        result.push(array[j]);
    }
  }
  
  return ( result.length === 2 ) ? result : undefined;
}

console.log(pairWithSumZeroInSortedArray([-3, -2, -1, 0, 1, 2, 4]));
