const romanToInt = (s) => {
    let total = 0
    const numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    for (let i = 0; i < s.length; i++) {
        let numeral = s[i]
        const doubleNumeral = `${numeral}${s[i + 1]}`

        // If numeral combind with next numeral is itself a numeral 
        // then combind them and ignore the next numeral
        if (numerals[doubleNumeral]) {
            numeral = doubleNumeral
            i++
        }
        total += numerals[numeral]
    }
    return total
}

module.exports = {
    romanToInt
}