/*
    ALT 
        No COVE var, check left against right at each recursion then return that (cleaner).
    ALT 2
        check if left, right nodes not null instead of current node.
*/

const maxDepth = (root) => {
    // COVE vars.
    let maxDepth = 0

    const depthSearch = (node, depth) => {
        // Exit condition.
        if (node === null) return

        // check
        if (depth > maxDepth) maxDepth = depth

        // Step.
        depth++

        // Recursion.
        depthSearch(node.left, depth)
        depthSearch(node.right, depth)
    }
    depthSearch(root, 1)
    return maxDepth
}

module.exports = {
    maxDepth
}