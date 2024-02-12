const addBinary = (a, b) => {
    let result = ""
    let carry = 0

    // convert a, b to same length strings
    if (a.length > b.length) {
        let diff = a.length - b.length

        while (diff) {
            b = "0" + b
            diff--
        }
    } else if (b.length > a.length) {
        let diff = b.length - a.length

        while (diff) {
            a = "0" + a
            diff--
        }
    }

    for (let i = a.length - 1; i >= 0; i--) {
        const aBit = Number(a[i])
        const bBit = Number(b[i])
        const sum = Number(a[i]) + Number(b[i]) + carry

        if (sum === 3) {
            carry = 1
            result = "1" + result
        } else if (sum === 2) {
            carry = 1
            result = "0" + result
        } else if (sum === 1) {
            carry = 0
            result = "1" + result
        } else {
            carry = 0
            result = "0" + result
        }
    }

    if (carry) {
        result = "1" + result
    }

    return result
}