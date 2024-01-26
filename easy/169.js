/*
    ALT 1
        Map more efficent than object?
    ALT 2
        Less vars, more inplace, but less clear code.
*/


const majorityElement = (nums) => {
    const majority = nums.length / 2
    const counts = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (!counts[num]) counts[num] = 1
        else counts[num]++

        if (counts[num] > majority) return num
    }
}

module.exports = {
    majorityElement
}