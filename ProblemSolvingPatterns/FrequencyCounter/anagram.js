function anagram(str1, str2) {

    if(str1.length!=str2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
  
  
   for (let i = 0; i < str1.length; i++) {
     if(frequencyCounter1[str1[i]] > 0){
      frequencyCounter1[str1[i]]++
     }else{
      frequencyCounter1[str1[i]]=1;
     }
   }
  
   for (let j = 0; j < str2.length; j++) {
    if(frequencyCounter2[str2[j]] > 0){
     frequencyCounter2[str2[j]]++
    }else{
     frequencyCounter2[str2[j]]=1;
    }
  }
  
   for (let key in frequencyCounter1) {
      if(!frequencyCounter2.hasOwnProperty(key)){
        return false;
      }
     if(frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
     }
      
   }
   return true;
   
  }
  
  
 // console.log(anagram("iitaxdsd", "iixsaddt"));