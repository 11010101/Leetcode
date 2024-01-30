const canConstruct = (ransomNote, magazine) => {
    const hashMap = new Map()

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
        const quantity = hashMap.get(char)

        if (quantity) hashMap.set(char, quantity + 1)
        else hashMap.set(char, 1)
    }
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i]
        const quantity = hashMap.get(char)

        if (quantity > 1) hashMap.set(char, quantity - 1)
        else hashMap.delete(char)
        if (!hashMap.size) return true
    }
    return false
}

module.exports = {
    canConstruct
}


const alpha = "qwertyuiopasdfghjklzxcvbnm"

const start = Date.now()
console.log(canConstruct("qwertyuiopasdfghjklzxcvbnm", "qwertyuiopasdfghjklzxcvbnm"))
console.log(Date.now() - start)