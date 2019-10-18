class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  preOrder() {
    function preOrderHelper(root) {
      if (root === null) {
        return;
      }
      console.log(root.value);
      preOrderHelper(root.left);

      preOrderHelper(root.right);
    }
    preOrderHelper(this.root);
  }

  search(key) {
    function searchHelper(rootTree) {
      if (rootTree === null) {
        return null;
      }
      if (key > rootTree.value) {
        searchHelper(rootTree.right);
      } else if (key < rootTree.value) {
        searchHelper(rootTree.left);
      } else if (key === rootTree.value) {
        return rootTree;
      }
    }

    return searchHelper(this.root);
  }

  searchInGivenHeight(height, key) {
    let counterHeight = 0;
    function searchInGivenHeightHelper(rootTree) {
     
      
      if (!rootTree) {
        return null;
      }
      if (key > rootTree.value) {
        counterHeight++;
        searchInGivenHeightHelper(rootTree.right);
      } else if (key < rootTree.value) {
        counterHeight++;
        searchInGivenHeightHelper(rootTree.left);
      } else if (key === rootTree.value) {
        if (counterHeight === height) {
          return rootTree;
        } else {
          return null;
        }
      }
    }
    return searchInGivenHeightHelper(this.root);
  }
}

let bst = new BinarySearchTree();
bst.insert(12);
bst.insert(34);
bst.insert(4);
bst.insert(74);
bst.insert(7);
bst.insert(15);
bst.insert(2);
bst.preOrder();
console.log(bst.searchInGivenHeight(2, 7));
