function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    let frequencyCounter = {};
  
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      // if letter exists, increment, otherwise set to 1
      frequencyCounter[letter] ? frequencyCounter[letter] += 1 : frequencyCounter[letter] = 1;
    }
  
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!frequencyCounter[letter]) {
        return false;
      } else {
        frequencyCounter[letter] -= 1;
      }
    }
  
    return true;
  }
  

  anagram('anagram', 'nagaram')