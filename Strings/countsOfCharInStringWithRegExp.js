function countsOfCharInStringWithRegExp(str) {
  let obj = {};
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//console.log( countsOfCharInStringWithRegExp("ejhfe 332!!'"));
