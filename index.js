// Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.


// countHi2("ahixhi") → 1
// countHi2("ahibhi") → 2
// countHi2("xhixhi") → 0

const countHi2 = str => {
  // declare outside counter to keep track
  let currentCount = 0

  // inner recursive function
  const countFunc = (str, count) => {
    // if current char is x
    if(str.slice(0,1) === 'x') {
      // check if next two chars are 'hi'
      if (str.slice(1,3) === 'hi') {
        // recurse on str.slice(3) dont increment
        if (str.slice(3)) {
          countFunc(str.slice(3), currentCount)
        }
      } else {
        // recurse on str.slice(1)
        if(str.slice(1)) {
          countFunc(str.slice(1), currentCount)
        }
    
      }
    } else {
    // else
      // check if first two chars are hi
      if ( str.slice(0,2) === 'hi') {
        // check if there are more chars after hi
        if (str.slice(2)) {
          // increment counter and recurse on remaining
          currentCount += 1;
          countFunc(str.slice(2), currentCount)
        } else {
          currentCount += 1;
        }
          
      } else {
          countFunc(str.slice(1), currentCount)
      }
    }
  }
  countFunc(str, currentCount)  
  
  return currentCount
}

countHi2("xhixhi")
countHi2("ahibhi")
console.log('countHi2("xhixhi")', countHi2("xhixhi"))
console.log('countHi2("ahibhi")', countHi2("ahibhi"));
console.log(' countHi2("ahixhi")',  countHi2("ahixhi"))