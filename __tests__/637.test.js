const { BST } = require("../utils/binarySearchTree")
const { averageOfLevels } = require("../easy/637")

describe("Testing: averageOfLevels function from 637.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            const tree = new BST()
            tree.init([3,9,20,null,null,15,7])
        
            expect(averageOfLevels(tree.root)).toEqual([3, 14.5, 11])
        })
        test("test 2", () => {
            const tree = new BST()
            tree.init([3,9,20,15,7])
        
            expect(averageOfLevels(tree.root)).toEqual([3, 14.5, 11])
        })
    })
    describe("Aditional Tests", () => {
        test("returns an empty array for an empty tree", () => {
            const tree = new BST()
            tree.init([])
        
            expect(averageOfLevels(tree.root)).toEqual([])
        })
        test("returns correct averages for a single-node tree", () => {
            const tree = new BST()
            tree.init([5])
        
            expect(averageOfLevels(tree.root)).toEqual([5])
        })
        test("returns correct averages for a balanced tree with multiple levels", () => {
            const tree = new BST()
            tree.init([10, 5, 15, 3, 7, 12, 20])

            expect(averageOfLevels(tree.root)).toEqual([10, 10, 10.5])
        })
        test("returns correct averages for a tree with only left children", () => {
            const tree = new BST()
            tree.init([1, 2, null, 3, 4, null, null])
  
            expect(averageOfLevels(tree.root)).toEqual([1, 2, 3.5])
        })
    })
})