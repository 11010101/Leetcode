/*
    ALT 1
        Bitwise operators
*/

const isPalindrome = (x) => {
    const xStr = x.toString()
    let left = 0
    let right = xStr.length - 1

    while (left < right) {
        if (xStr[left] !== xStr[right]) {
            return false
        }
        left++
        right--
    }

    return true
}