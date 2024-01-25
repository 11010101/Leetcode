const merge = require("../easy/88")

describe("Testing: removeElement function from 27.js", () => {
    describe("leetcode tests", () => {
        test("test 1: return value", () => {
            const arr = [3,2,2,3]

            expect(removeElement(arr, 3)).toBe(2)
        })
    })
})

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
const m = 3
const n = 3

console.log(merge(nums1, m, nums2, n))