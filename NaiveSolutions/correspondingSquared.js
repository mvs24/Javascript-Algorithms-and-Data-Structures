function correspondingSquared(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      let counter = 0;
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] * array1[i] !== array2[j]) {
          counter++;
        }
        if (array1[i] * array1[i] === array2[j]) {
          array2[j] = "0";
        }
        if (counter == array2.length) {
          return false;
        }
      }
    }
    return true;
  }
  
  //console.log(correspondingSquared([2,3,1,0], [9,4,1,144]));
  