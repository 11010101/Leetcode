const lengthOfLongestSubstring = (s) => {
    let left = 0
    let subString = new Set()
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        const char = s[right]

        // if char repeated move left up untill no longer repeated
        while (subString.has(char)) {
            subString.delete(s[left])
            left++
        }

        // once not repeated add char to substring
        subString.add(char)

        // set maxLength of unique substring encounted
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}