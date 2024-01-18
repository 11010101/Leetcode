const twoNums = (nums, target) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]
        const numToFind = target - currentNum

        if (map.has(numToFind)) return [map.get(numToFind), i]
        else map.set(nums[i], i)
    }
}