const { majorityElement } = require("../easy/169")

describe("Testing: majorityElement function from 169.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            const inputArray = [3,2,3]
            const majority = majorityElement(inputArray)

            expect(majority).toBe(3)
        })
        test("test 2", () => {
            const inputArray = [2,2,1,1,1,2,2]
            const majority = majorityElement(inputArray)

            expect(majority).toBe(2)
        })
    })
    describe("additional tests", () => {
        test("should find the majority element in a simple array", () => {
        const inputArray = [2, 2, 3, 5, 2, 2]
        const majority = majorityElement(inputArray)
    
        expect(majority).toBe(2)
        })
        test("should handle an array with all the same elements", () => {
        const inputArray = [4, 4, 4, 4]
        const majority = majorityElement(inputArray)
    
        expect(majority).toBe(4)
        })
        test("should handle an array with two elements", () => {
        const inputArray = [3, 3]
        const majority = majorityElement(inputArray)
    
        expect(majority).toBe(3)
        })
    })
})