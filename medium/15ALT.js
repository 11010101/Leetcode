const threeSum = (nums) => {
    const seen = new Set()
    const triplets = []

    for (let i = 0; i < nums.length -2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    seen.add([nums[i], nums[j], nums[k]].sort().join("_"))
                }
            }
        }
    }
    
    for (const set of seen) {
        triplets.push(set.split("_"))
    }

    return triplets
}

const nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums))