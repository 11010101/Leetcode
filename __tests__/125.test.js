const { isPalindrome } = require("../easy/125")

describe("Testing: isPalindrome function from 125.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
        })
    })
})