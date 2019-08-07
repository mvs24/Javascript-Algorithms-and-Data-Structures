function reverse(array) {
    let result = [];
    function reverseArray(array) {
      if (array.length === 0) return result;
      let removedEl = array.pop();
      result.push(removedEl);
      
      reverseArray(array);
    }
    reverseArray(array);
    return result;
  }
  
  
  console.log(reverse([3, 4, 5, 6, 7, 8]));
  
