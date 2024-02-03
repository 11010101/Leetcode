const compose = (functions) => {
    return function(x) {
        let acc = x

        for (let i = functions.length - 1; i >= 0; i--) {
            const fn = functions[i]

            acc = fn(acc)
        }
        return acc
    }
}