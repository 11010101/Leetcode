const removeElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    } 
    return nums.length
}

module.exports = {
    removeElement
}

/*
const arr = []
for (let i = 0; i < 10000; i++) {
    for (let j = 1; j < 10; j++) {
        arr.push(j)
    }
}

console.log(arr)

start = Date.now()
console.log("k:", removeElement(arr, 3))
console.log("time:", Date.now() - start)
*/

const arr = [0,1,2,2,3,0,4,2]
console.log(removeElement(arr, 2))
console.log(arr)
