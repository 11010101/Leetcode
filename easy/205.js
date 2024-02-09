/*
    ALT
        dual directional maps checking for duplicates, slower but clearer code
*/


const isIsomorphic = (s, t) => {
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]
        const tChar = t[i]
        const nextIndex = i + 1

        if (s.indexOf(sChar, nextIndex) !== t.indexOf(tChar, nextIndex)) {
            return false
        }
    }
    return true
}

const s = "foo"
const t = "bar"

console.log(isIsomorphic(s, t))