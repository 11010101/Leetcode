const removeDuplicates = (nums) => {

    let left = 0
    let right = 0

    while (right < nums.length) {
        let duplicates = false

        // move up right, checking for duplicates
        while (right + 1 < nums.length && nums[right] === nums[right + 1]) {
            right++
            duplicates = true
        }

        // set left element and next left element if duplicated
        // move up left and right
        for (let i = 0; i < (duplicates ? 2 : 1) ; i++) {
            nums[left] = nums[right]
            left++
        }

        right++
    }
    nums.length = left
    return nums
}