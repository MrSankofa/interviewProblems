// Given a string, compute recursively the number of times lowercase "hi" appears in the string, however do not count "hi" that have an 'x' immedately before them.


// countHi2("ahixhi") → 1
// countHi2("ahibhi") → 2
// countHi2("xhixhi") → 0

const countHi2 = str => {
let currentCount = 0;
  // need inner recursive function 
  const countFunc = (str, count) => {
    let newCount = count
    // check if first 2 chars are 'hi'
    if(str.slice(0,2) === 'hi') {
      // if there are other chars recurse on remaining
      if ( str.slice(2)) {
        newCount += 1;
       currentCount += countFunc(str.slice(2), newCount)
      } else {
        currentCount += newCount + 1;
      }
    } else {
      if ( str.slice(1)) {
        countFunc(str.slice(1), newCount)
      } {
        return currentCount
      }
    }

    return currentCount
  }
  countFunc(str, 0)
  return currentCount

}

countHi2("xhixhi")
console.log('countHi2("xhixhi")', countHi2("xhixhi"))