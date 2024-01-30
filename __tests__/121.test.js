const { maxProfit } = require("../easy/121")

describe("Testing: maxProfit function from 121.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            expect(maxProfit([7,1,5,3,6,4])).toBe(5)
        })

        test("test 2", () => {
            expect(maxProfit([7,6,4,3,1])).toBe(0)
        })
    })
    describe("Aditional tests", () => {
        test('returns 0 if prices are empty', () => {
            expect(maxProfit([])).toBe(0)
          })
          
          test('returns 0 if prices are non-increasing', () => {
            expect(maxProfit([10, 8, 5, 2])).toBe(0)
          })
          
          test('returns the correct profit for a simple case', () => {
            expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
          })
          
          test('handles a larger array with multiple peaks', () => {
            expect(maxProfit([9, 11, 8, 5, 7, 10, 3])).toBe(5)
          })
          
          test('handles negative prices correctly', () => {
            expect(maxProfit([-2, 0, -1, 5, -3, 2])).toBe(7)
          })
          
          test('handles a single price', () => {
            expect(maxProfit([5])).toBe(0)
          })
          
          test('handles duplicate prices', () => {
            expect(maxProfit([5, 5, 5])).toBe(0)
          })
    })
})