function pairWithSumZeroInSortedArray(array) {
  let result = [];
  let i = 0;
  let j = array.length - 1;
  while(j > i){
    if(array[i] + array[j] > 0) {
        j--;
    }else if(array[i] + array[j] < 0) {
        i++;
    }else{
        return[array[i],array[j]];
    }
  }
}

//console.log(pairWithSumZeroInSortedArray([-3, -2, -1, 0, 1, 2, 4]));
