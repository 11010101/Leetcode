const removeDuplicates = (nums) => {
    const hashMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const quantity = hashMap.get(num)

        if (quantity === 2) {
            nums.splice(i, 1)
            i--
        } else if (quantity) {
            hashMap.set(num, quantity + 1)
        } else {
            hashMap.set(num, 1)
        }
    }
    return nums
}