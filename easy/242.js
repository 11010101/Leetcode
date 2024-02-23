const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }

    const hashMap = new Map()

    for (let i = 0; i < s.length; i ++) {
        const sChar = s[i]
        const sCharQuantity = (hashMap.get(sChar) | 0) + 1
        const tChar = t[i]
        const tCharQuantity = (hashMap.get(tChar) | 0) - 1

        if (sCharQuantity) {
            hashMap.set(sChar, sCharQuantity)
        } else {
            hashMap.delete(sChar)
        }

        if (tCharQuantity) {
            hashMap.set(tChar, tCharQuantity)
        } else {
            hashMap.delete(tChar)
        }
    }
    return hashMap.size ? false : true
}