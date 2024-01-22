const { maxDepth } = require("../easy/104")
const { BST } = require("../utils/binarySearchTree")

describe("Testing: removeElement function from 27.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            const tree = new BST()
            const nodes = [9,3,20,15,7]
            nodes.forEach(node => tree.add(node))

            expect(maxDepth(tree.root)).toBe(3)
        })
        test("test 1", () => {
            const tree = new BST()
            const nodes = [1, null, 2]
            nodes.forEach(node => tree.add(node))

            expect(maxDepth(tree.root)).toBe(2)
        })
    })
    describe("Aditional tests", () => {
        test("empty tree should return depth 0", () => {
            const tree = new BST()

            expect(maxDepth(tree.root)).toBe(0)
        })
        test("single node tree should return depth 1", () => {
            const tree = new BST()
            tree.add(3)

            expect(maxDepth(tree.root)).toBe(1)
        })
        test("balanced tree should return correct depth", () => {
            const tree = new BST()
            const nodes = [5,3,1,4,7,9]
            nodes.forEach(node => tree.add(node))

            expect(maxDepth(tree.root)).toBe(3)
        })
        test("unbalanced tree with deeper left subtree should return correct depth", () => {
            const tree = new BST()
            const nodes = [5,3,2,4,7]
            nodes.forEach(node => tree.add(node))

            expect(maxDepth(tree.root)).toBe(3)
        })
        test("unbalanced tree with deeper right subtree should return correct depth", () => {
            const tree = new BST()
            const nodes = [3,7,1,5,9]
            nodes.forEach(node => tree.add(node))

            expect(maxDepth(tree.root)).toBe(3)
        })
        test("tree with negative values should return correct depth", () => {
            const tree = new BST()
            const nodes = [-4,-2,-8,-6,-10]
            nodes.forEach(node => tree.add(node))

            expect(maxDepth(tree.root)).toBe(3)
        })
    })
})