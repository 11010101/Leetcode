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

const functions = [x => x + 1, x => x * x, x => 2 * x]

const instanceFn = compose(functions)

console.log(instanceFn(4))