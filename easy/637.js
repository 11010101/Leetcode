/*
    ALT 1
        Use multiple primitive vars to track levels instead of nested loops.
    ALT 2
        Clean up: no empty arr check, no excess vars.
        But less clear/resilient code.
*/
const averageOfLevels = (root) => {
    // return empty array for empty BST
    if (!root) return []

    const queue = [ root ]
    const levelAvgs = []

    while (queue.length > 0) {
        // Get levelSize from nodes in the queue
        const levelSize = queue.length
        let levelSum = 0

        // loop through level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()

            levelSum += currentNode.val

            // check for children to add to queue
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        levelAvgs.push(levelSum / levelSize)
    }
    return levelAvgs
}

module.exports = {
    averageOfLevels
}