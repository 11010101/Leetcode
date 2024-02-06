const strStr = (haystack, needle) => {
    const endOfNeedle = needle.length - 1
    for (let i = 0; i < haystack.length; i++) {
        let haystackIndex = i
        let needleIndex = 0

        while (haystack[haystackIndex] === needle[needleIndex]) {
            if (needleIndex === endOfNeedle) return haystackIndex - endOfNeedle
            needleIndex++
            haystackIndex++
        }
    }
    return - 1
}