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
        test("test 2: return value", () => {
            const arr = [0,1,2,2,3,0,4,2]

            expect(removeElement(arr, 2)).toBe(5)
        })
        test("test 2: array mutation", () => {
            const arr = [0,1,2,2,3,0,4,2]

            removeElement(arr, 2)
            
            expect(arr).toEqual([0,1,3,0,4])
        })
    })
    describe("aditional tests", () => {
        test("returns a number", () => {
            const arr = [0,1,2,2,3,0,4,2]

            expect(typeof removeElement(arr, 2)).toEqual("number")
        })
        test("mutates array", () => {
            const arr = [1,2,3]

            removeElement(arr, 1)
            
            expect(arr).toEqual([2,3])
        })
        test("empty array returns 0", () => {
            const arr = []

            expect(removeElement(arr, 1)).toEqual(0)
        })
        test("doesnt mutate array, when given val not in array", () => {
            const arr = [1,2,3]
            const arrClone = [1,2,3]

            removeElement(arr, 4)

            expect(arr).toEqual(arrClone)
        })
    })
})