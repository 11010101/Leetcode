/*
    ALT 1
        init smallestdiff as infinite then set to smallest between smallestdiff and diff
        can now move front up Regardless
        check if smallestdiff still infinite at the end, if so return 0
        less clear but more efficent
*/


const minSubArrayLen = (target, nums) => {
    let back = 0
    let sum = 0
    let smallestDiff = 0

    for (let front = 0; front < nums.length; front++) {

        sum += nums[front]

        // try move back up
        while ((sum - nums[back]) >= target) {
            sum -= nums[back]
            back++
        }

        // if sum >= target and 
        // current diff smaller than previous smallest diff remember new smallest diff
        if (sum >= target) {
            const diff = front - back + 1
            if (!smallestDiff || diff < smallestDiff) {
                smallestDiff = diff
            }
        }
    }
    return smallestDiff
}