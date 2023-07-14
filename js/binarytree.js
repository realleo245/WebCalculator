class Node {
    parent;
    leftChild;
    rightChild;
    node;
    constructor(parent, leftChild, rightChild, node) {
        this.parent = parent;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.node = node;
    }
} 
class BinaryTree {
    root;
    constructor(root) {
        this.root = root;
    }
}