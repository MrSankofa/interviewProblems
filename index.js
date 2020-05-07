// create a binary tree with this shape. 

//                1

//        2                9

//   3        6        10         13

// 4   5   7    8   11    12    14   15

// then implement a DFS to sum the values of that tree for every node

// I initally forgot the value
// I forgot how to create classes

// safe to say I need to practice this tomorrow.
// complete this implementation in 1 hour with two 5 min breaks
// failed on how to traverse DF and track the summation as a traversed
const binaryTree = function() {
    this.left = undefined;
    this.right = undefined;
    this.value = undefined;
}

const root = new binaryTree;
const bTree2 = new binaryTree;
const bTree3 = new binaryTree;
const bTree4 = new binaryTree;
const bTree5 = new binaryTree;
const bTree6 = new binaryTree;
const bTree7 = new binaryTree;
const bTree8 = new binaryTree;
const bTree9= new binaryTree;
const bTree10 = new binaryTree;
const bTree11 = new binaryTree;
const bTree12 = new binaryTree;
const bTree13 = new binaryTree;
const bTree14 = new binaryTree;
const bTree15 = new binaryTree;

root.value = 1;
bTree2.value = 2
bTree9.value = 9
root.left = bTree2;
root.right = bTree9;

bTree3.value = 3;
bTree6.value = 6;
bTree2.left = bTree3
bTree2.right = bTree6;

bTree10.value = 10;
bTree13.value = 13;
bTree9.left = bTree10;
bTree9.right = bTree13;

bTree4.value = 4;
bTree5.value = 5;
bTree3.left = bTree4;
bTree3.right = bTree5;

bTree7.value = 7;
bTree8.value = 8;
bTree6.left = bTree7;
bTree6.right = bTree8;

bTree11.value = 11;
bTree12.value = 12;
bTree10.left = bTree11;
bTree10.right = bTree12;

bTree14.value = 14;
bTree15.value = 15;
bTree13.left = bTree14;
bTree13.right = bTree15;


let sum = 0
const sumTreeDFS = (tree) => {
  sum += tree.value
  console.log('tree.value', tree.value)
  console.log('sum', sum)
   // check if left exists
  if (tree && tree.left) {
     sumTreeDFS(tree.left);
     sumTreeDFS(tree.right);
  }
}

sumTreeDFS(root, 0)
// console.log('sumTreeDFS(root)', sumTreeDFS(root));