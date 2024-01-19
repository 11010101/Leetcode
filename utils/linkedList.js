class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(data, nodeIndex) {
        const newNode = new Node(data)

        if (this.head === null) {
            // Init empty list.
            this.head = newNode
            this.tail = newNode
        } else {
            // Set previous tail node's next value to new node.
            this.tail.next = newNode
            // Set new node as tail.
            this.tail = newNode
            // If index of circular node specified, get node by index and set new node's next value as that node.
            if (nodeIndex >= 0) this.tail.next = this.get(nodeIndex)
        }
        this.length++
    }
    get(nodeIndex) {
        let targetNode = this.head
        for (let i = 0; i < nodeIndex; i++) targetNode = targetNode.next
        return targetNode
    }
    print(nodes = this.length) {
        let current = this.head
        console.log("nodes:", this.length)
        for (let i = 0; i < nodes; i++) {
            console.log("index:",i,"\n",current)
            current = current.next
        }
    }
}

module.exports = {
    LinkedList
}
