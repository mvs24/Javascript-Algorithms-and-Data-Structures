function countsOfCharInString(str) {
  let obj = {};
  let string = str.toLowerCase();
  for (let i = 0; i < string.length - 1; i++) {
      if(obj[string[i]] > 0) {
          obj[string[i]]++;
      }else {
          obj[string[i]] = 1;
      }
  }
  return obj;
}

//console.log(countsOfCharInString("abba  Aacd!"));
