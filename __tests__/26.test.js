const { removeDuplicates } = require("../easy/26")

describe("Testing: removeDuplicates function from 26.js", () => {
    describe("leetcode tests", () => {
        test("test 1: return value", () => {
            const arr = [1,1,2]

            expect(removeDuplicates(arr)).toBe(2)
        })
        test("test 1: mutate array", () => {
            const arr = [1,1,2]

            removeDuplicates(arr)

            expect(arr[0]).toEqual(1)
            expect(arr[1]).toEqual(2)
        })
        test("test 2: return value", () => {
            const arr = [0,0,1,1,1,2,2,3,3,4]

            expect(removeDuplicates(arr)).toBe(5)
        })
        test("test 2: mutate array", () => {
            const arr = [0,0,1,1,1,2,2,3,3,4]

            removeDuplicates(arr)

            expect(arr[0]).toEqual(0)
            expect(arr[1]).toEqual(1)
            expect(arr[2]).toEqual(2)
            expect(arr[3]).toEqual(3)
            expect(arr[4]).toEqual(4)
        }) 
    })
    describe("additional tests", () => {
        test("should remove duplicates from a simple array", () => {
          const inputArray = [1, 1, 2, 3, 3]
          const uniqueCount = removeDuplicates(inputArray)
      
          expect(uniqueCount).toBe(3)
          expect(inputArray.slice(0, uniqueCount)).toEqual([1, 2, 3])
        })
        test("should handle an array with all unique elements", () => {
          const inputArray = [1, 2, 3, 4]
          const uniqueCount = removeDuplicates(inputArray)
      
          expect(uniqueCount).toBe(4)
          expect(inputArray.slice(0, uniqueCount)).toEqual([1, 2, 3, 4])
        })
        test("should handle an array with all duplicate elements", () => {
          const inputArray = [1, 1, 1, 1]
          const uniqueCount = removeDuplicates(inputArray)
      
          expect(uniqueCount).toBe(1)
          expect(inputArray.slice(0, uniqueCount)).toEqual([1])
        })
    })
})