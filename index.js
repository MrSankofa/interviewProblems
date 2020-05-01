
// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.


// strCount("catcowcat", "cat") → 2
// strCount("catcowcat", "cow") → 1
// strCount("catcowcat", "dog") → 0

const strCount = (str, word) => {
  // declare length variables and counter
  const wordlen = word.length; 

  if (str.length >= wordlen) {
    if (str.slice(0, wordlen) === word) {
        if( str.slice(wordlen)) {
          return 1 + strCount(str.slice(wordlen), word);
        } else {
          return 1;
        }
      } else {
        if( str.slice(wordlen)) {
          return 0 + strCount(str.slice(wordlen), word)
        } else {
          return 0;
        }
      }
        
  } else {
    return 0
  }
  
}

console.log('strCount("catcowcat", "cat")', strCount("catcowcat", "cat"))
console.log('strCount("catcowcat", "cow")', strCount("catcowcat", "cow"))
console.log('strCount("catcowcat", "dog")', strCount("catcowcat", "dog"))
console.log('strCount("do", "dog")', strCount("catcowcat", "dog"))