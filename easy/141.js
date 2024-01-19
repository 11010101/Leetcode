const {LinkedList} = require("../utils/linkedList")

/*
Alt 1, 2
    Use hashmap or set a visited property directly on each node.
    Then no need for tortoise and hare Algorithm.
Alt 3
    Use head object as tortoise for slight speed boost but less clear code.
*/

const hasCycle = (head) => {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) return true
    }
    return false
}

module.exports = {
    hasCycle
}