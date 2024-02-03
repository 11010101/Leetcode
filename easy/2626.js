const reduce = (nums, fn, init) => {
    let acc = init

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]

        acc = fn(acc, cur)
    }

    return acc
}