const { numIslands } = require("../medium/200")

describe("Testing: numIslands function from 637.js", () => {
    describe("leetcode tests", () => {
        test('test 1', () => {
            expect(numIslands([
                ["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]
            ])).toBe(1)
        })
        test('test 2', () => {
            expect(numIslands([
                ["1","1","0","0","0"],
                ["1","1","0","0","0"],
                ["0","0","1","0","0"],
                ["0","0","0","1","1"]
            ])).toBe(3)
        })
    })
    describe("Adtestional Tests", () => {
        test('should return 0 for an empty grid', () => {
            expect(numIslands([])).toBe(0)
        })
        
        test('should return 1 for a single grid cell wtesth value "1"', () => {
            expect(numIslands([["1"]])).toBe(1)
        })
        
        test('should return 3 for a grid wtesth a 3 diagonal islands', () => {
            expect(numIslands([
              ["1", "0", "0"],
              ["0", "1", "0"],
              ["0", "0", "1"],
            ])).toBe(3)
        })
        
        test('should return 4 for a grid wtesth 4 corner islands', () => {
            expect(numIslands([
              ["1", "0", "1"],
              ["0", "0", "0"],
              ["1", "0", "1"],
            ])).toBe(4)
        })
        
        test('should return 4 for a grid wtesth 4 separate islands', () => {
            expect(numIslands([
              ["1", "0", "0", "0"],
              ["0", "0", "1", "0"],
              ["0", "1", "0", "0"],
              ["0", "0", "0", "1"],
            ])).toBe(4)
        })
        
        test('should handle diagonally connected cells as separate islands', () => {
            expect(numIslands([
              ["1", "0", "0"],
              ["0", "1", "0"],
              ["0", "0", "1"],
            ])).toBe(3)
        })
    })
})