class Node {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null
    }

    add(val) {
        const node = this.root

        if (node === null) {
            this.root = new Node(val)
            return this.root
        } else {
            const searchTree = function(node) {
                if (val < node.val) {
                    if (node.left === null) {
                        node.left = new Node(val)
                        return
                    } else {
                        return searchTree(node.left)
                    }
                } else if (val > node.val) {
                    if (node.right === null) {
                        node.right = new Node(val)
                        return
                    } else {
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            }
            return searchTree(node)
        }
    }
    findMin() {
        let current = this.root

        while (current.left !== null) {
            current = current.left
        }
        return current.val
    }
    findMax() {
        let current = this.root

        while (current.right !== null) {
            current = current.right
        }
        return current.val
    }
    find(val) {
        let current = this.root

        while (current.val !== val) {
            // left child
            if (val < current.val) { 
                current = current.left
            // right child
            } else {  
                current = current.right
            }
            // not found
            if (current === null) { 
                return null
            }
        }
        return current
    }
    isPresent(val) {
        let current = this.val

        while (current) {
            if (val === current.val) {
                return true
            }
            if (val < current.val) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }
    remove(val) {
        const removeNode = function(node, val) {
            if (node == null) {
                return null
            }

            // if current node is target val
            if (val == node.val) {
                // node has no child
                if (node.left == null && node.right == null) {
                    return null
                }
                // node has no left child
                if (node.left == null) {
                    return node.right
                }
                // node has no right child
                if (node.right == null) {
                    return node.left
                }

                // node has two children
                // get the smallest left leaf node of the right child node
                // let tempNode point to it
                let tempNode = node.right
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }

                // replace given node with this tempNode
                node.val = tempNode.val
                // fix rest of rightside tree removing this node
                node.right = removeNode(node.right, tempNode.val)

                return node

            // if target val is less or more than current node val
            // invoke reccursivly on that side
            } else if (val < node.val) {
                node.left = removeNode(node.left, val)
                return node
            } else {
                node.right = removeNode(node.right, val)
                return node
            }
         }
         this.root = removeNode(this.root, val)
    }
    print() {
        const printTree = (current) => {
            console.log(`val: ${current.val}${current.left ? ", left: " + current.left.val : ""}${current.right ? ", right: " + current.right.val : ""}`)

            if (current.left) printTree(current.left)
            if (current.right) printTree(current.right)
        }
        printTree(this.root)
    }
}

module.exports = {
    BST
}