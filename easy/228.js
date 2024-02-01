const summaryRanges = (nums) => {
    const ranges = []

    for (let i = 1; i <= nums.length; i++) {
        // init range start and stop to previous num
        let rangeStart = nums[i - 1]
        let rangeStop = nums[i - 1]

        // while num isnt last num in nums and is in current range
        while (i < nums.length && nums[i] === rangeStop + 1) {
            rangeStop = nums[i]
            i++
        }

        if (rangeStart === rangeStop) {
            ranges.push(`${rangeStart}`)
        } else {
            ranges.push(`${rangeStart}->${rangeStop}`)
        }
    }
    return ranges
}

module.exports = {
    summaryRanges
}