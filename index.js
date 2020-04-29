// Print out each nodes name as you traverse the given tree?
const familyTree = {
  name: 'brett',
  bank: 54,
  children: [{
    name: 'Little Brett',
    bank: 20 ,
    children: [{
    name: 'Little Little Brett',
    bank: 100,
    children: []
  }]
  },{
    name: 'Autumn',
    bank: 34,
    children: [{
    name: 'Little Autumn',
    bank: 10,
    children: [{
    name: 'Little Little Autumn',
    bank: 500,
    children: []
  }]
  }]
  },{
    name: 'Summer',
    bank: 400,
    children: [{
    name: 'Little Summer',
    bank: 200,
    children: []
  }]
  }]
}
const findSmallestBank = (tree, smallest) => {
  // declare newSmallest variable
  let newSmallest = smallest;

  // if smallest undefined 
  if (!newSmallest) {
    // store current bank node as smallest
    newSmallest = tree.bank
  } else {
    // if current node is smailler 
    // change smallest variable
    if ( tree.bank < newSmallest) {
      newSmallest = tree.bank
    }
  }
    
  // check if node has children
  if( tree.children && tree.children.length) {
    // loop through children
      // recurse on current element, pass newSmallest Variable
    tree.children.forEach(element => {
      newSmallest = findSmallestBank(element, newSmallest)
    });
  }
  return newSmallest;
}

console.log('findSmallestBank', findSmallestBank(familyTree))