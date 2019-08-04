function power(a, b) {
    // a^b
    if (b === 0) {
      return 1;
    } else if (b === 1) {
      return a;
    }
    return power(a, b - 1) * a;
  }
  
  console.log(power(3, 4));
   