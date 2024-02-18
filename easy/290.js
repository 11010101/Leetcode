const wordPattern = (pattern, s) => {
    const wordMap = new Map()
    const charMap = new Map()
    const words = s.split(" ")

    if (pattern.length !== words.length) {
        return false
    }

    for (let i = 0; i < pattern.length; i++) {
        const char = charMap.get(words[i])
        const word = wordMap.get(pattern[i])
    
        if (char && word) {
            if (words[i] !== word || pattern[i] !== char) {
                return false
            }
        } else if (char || word) {
            return false
        } else {
            charMap.set(words[i], pattern[i])
            wordMap.set(pattern[i], words[i])
        }
    }
    return true
}

const pattern = "abba"
const s = "dog cat cat dog"

console.log(wordPattern(pattern, s))