const { removeElement } = require("../easy/27")

describe("Testing: removeElement function from 27.js", () => {
    describe("leetcode tests", () => {
        test("test 1: return value", () => {
            const arr = [3,2,2,3]

            expect(removeElement(arr, 3)).toBe(2)
        })
        test("test 1: array mutation", () => {
            const arr = [3,2,2,3]

            removeElement(arr, 3)
            
            expect(arr).toEqual([2,2])
        })
        test("test 1: return value", () => {
            const arr = [0,1,2,2,3,0,4,2]

            expect(removeElement(arr, 2)).toBe(5)
        })
        test("test 1: array mutation", () => {
            const arr = [0,1,2,2,3,0,4,2]

            removeElement(arr, 2)
            
            expect(arr).toEqual([0,1,3,0,4])
        })
    })
})