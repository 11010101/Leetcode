const { LinkedList } = require("../utils/linkedList")
const { hasCycle } = require("../easy/141")

describe("Testing: hasCycle function from 141.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            const list = new LinkedList()
            list.append(3)
            list.append(2)
            list.append(0)
            list.append(-4, 0)

        expect(hasCycle(list.head)).toBe(true)
        })
        test("test 2", () => {
            const list = new LinkedList()
            list.append(1)
            list.append(2, 0)

            expect(hasCycle(list.head)).toBe(true)
        })
        test("test 3", () => {
            const list = new LinkedList()
            list.append(1)

            expect(hasCycle(list.head)).toBe(false)
        })
    })
    describe("additional tests", () => {
        test("empty list returns false", () => {
            const list = new LinkedList()

            expect(hasCycle(list.head)).toBe(false)
        })
        test("large list with no link returns false", () => {
            const list = new LinkedList()

            for (let i = 1; i < 1000; i++) list.append(i)

            expect(hasCycle(list.head)).toBe(false)
        })
    })
  })