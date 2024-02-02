/*
    ALT 1
        switch, much less efficient
    ALT 2
        use lookup table for bracket matching, too few brackets to be worth
*/

const isValid = (s) => {
    const openBrackets = []

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]

        if (bracket === "(" || bracket === "[" || bracket === "{") {
            openBrackets.push(bracket)
        } else {
            const lastBracket = openBrackets.pop()

            if ((bracket === ")" && lastBracket === "(") || 
                (bracket === "]" && lastBracket === "[") || 
                (bracket === "}" && lastBracket === "{")
            ) {
                continue
            } else {
                return false
            }
        }
    }
    // if there are still open backets return false, else true
    return openBrackets.length ? false : true
}


const brackets1 = "}"

console.log(isValid(brackets1))