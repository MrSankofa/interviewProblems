// create a binary tree with this shape. 

//                1

//        2                3

//   4        5        6         7

// 8   9   10  11   12  13   14   15

// 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15

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
const bTree9 = new binaryTree;
const bTree10 = new binaryTree;
const bTree11 = new binaryTree;
const bTree12 = new binaryTree;
const bTree13 = new binaryTree;
const bTree14 = new binaryTree;
const bTree15 = new binaryTree;

root.value = 1;
bTree2.value = 2
bTree3.value = 3;
root.left = bTree2;
root.right = bTree3;

bTree4.value = 4;
bTree5.value = 5;
bTree2.left = bTree4
bTree2.right = bTree5;

bTree6.value = 6;
bTree7.value = 7;
bTree3.left = bTree6;
bTree3.right = bTree7;

bTree8.value = 8;
bTree9.value = 9;
bTree4.left = bTree8;
bTree4.right = bTree9;

bTree10.value = 10;
bTree11.value = 11;
bTree5.left = bTree10;
bTree5.right = bTree11

bTree12.value = 12;
bTree13.value = 13;
bTree6.left = bTree12;
bTree6.right = bTree13;

bTree14.value = 14;
bTree15.value = 15;
bTree7.left = bTree14;
bTree7.right = bTree15;



const sumTreeDFS = (tree, sum) => {
    
   // check if left exists
   if (tree && tree.left) {
     // return value + sumTreeDFS(left)
     sumTreeDFS(tree.left, tree.value + sum);
     sumTreeDFS(tree.right, sum);
    
   } else if(tree && tree.right) {
   // else if right exists
     // return value + sumTreeDFS(right)
     sumTreeDFS(tree.right, tree.value + sum);
   } else {
   // else 
     // return value
     return sum + tree.value;
   }

   return sum;
}

sumTreeDFS(root, 0)
console.log('sumTreeDFS(root)', sumTreeDFS(root));