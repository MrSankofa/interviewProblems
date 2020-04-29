// Print out each nodes name as you traverse the given tree?
const familyTree = {
  name: 'brett',
  bank: 54
  children: [{
    name: 'Little Brett',
    bank: 20 
    children: [{
    name: 'Little Little Brett',
    age: 1
    children: []
  }]
  },{
    name: 'Autumn',
    bank: 34
    children: [{
    name: 'Little Autumn',
    bank: 1
    children: [{
    name: 'Little Little Autumn',
    bank: 5
    children: []
  }]
  }]
  },{
    name: 'Summer',
    bank: 400
    children: [{
    name: 'Little Summer',
    bank: 200
    children: []
  }]
  }]
}
const findSmallestBank = (tree, smallest) => {
  // declare newSmallest variable
  
  // if smallest undefined 
    // store current bank node as smallest
  // if current node is smailler 
    // change smallest variable



  // check if node has children
    // loop through children
      // recurse on current element, pass newSmallest Variable
}