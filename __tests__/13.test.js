const { romanToInt } = require("../easy/13")

describe("Testing: removeDuplicates function from 26.js", () => {
    describe("leetcode tests", () => {
        test("test 1", () => {
            expect(romanToInt("III")).toBe(3)
        })
        test("test 2", () => {
            expect(romanToInt("LVIII")).toBe(58)
        })
        test("test 3", () => {
            expect(romanToInt("MCMXCIV")).toBe(1994)
        })
    })
    describe("romanToInt", () => {
        test("handles basic Roman numerals", () => {
          expect(romanToInt("I")).toBe(1)
          expect(romanToInt("V")).toBe(5)
          expect(romanToInt("X")).toBe(10)
          expect(romanToInt("L")).toBe(50)
          expect(romanToInt("C")).toBe(100)
          expect(romanToInt("D")).toBe(500)
          expect(romanToInt("M")).toBe(1000)
        })
      
        test("handles combinations and subtractions", () => {
          expect(romanToInt("II")).toBe(2)
          expect(romanToInt("IV")).toBe(4)
          expect(romanToInt("IX")).toBe(9)
          expect(romanToInt("XL")).toBe(40)
          expect(romanToInt("XC")).toBe(90)
          expect(romanToInt("CD")).toBe(400)
          expect(romanToInt("CM")).toBe(900)
        })
      
        test("handles larger numbers", () => {
          expect(romanToInt("MCMLIV")).toBe(1954)
          expect(romanToInt("MMVIII")).toBe(2008)
          expect(romanToInt("MMXIX")).toBe(2019)
        })
      
        test("handles edge cases", () => {
          expect(romanToInt("")).toBe(0)
        })
      })
})