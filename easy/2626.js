const reduce = (nums, fn, init) => {
    let acc = init

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]

        acc = fn(acc, cur)
    }

    return acc
}

const nums = [1, 2, 3, 4]
const fn = (acc, cur) => acc + cur * cur
const init = 100

console.log(reduce(nums, fn, init))