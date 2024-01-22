/*
ALT 1
    Sort val to end then directly set nums.length.
ALT 2
    Instead of reverse loop i-- inside if statement / while loop.
ALT 3
    Use new arr for operations (filter), then spread into old nums arr.
*/

const removeElement = (nums, val) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) nums.splice(i, 1)
    } 
    return nums.length
}

module.exports = {
    removeElement
}