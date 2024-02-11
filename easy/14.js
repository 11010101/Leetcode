const longestCommonPrefix = (strs) => {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.substring(0, j)
            }
        }
    }
    return prefix
}