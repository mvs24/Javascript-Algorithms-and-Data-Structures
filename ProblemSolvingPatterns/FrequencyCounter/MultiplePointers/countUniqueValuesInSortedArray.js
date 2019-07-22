function countUniqueValuesInSortedArray(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if(array[i]!==array[i+1]){
        counter++;
      }
    }
    return counter;
  }
  //let array = [1,1,1,1,2];
  //console.log(countUniqueValuesInSortedArray(array));