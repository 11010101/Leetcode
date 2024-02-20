const twoSum = (numbers, target) => {
    let left = 0
    let right = numbers.length - 1

    while (right > left) {
        let sum = numbers[right] + numbers[left]

        if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        } else {
            return [left + 1, right + 1]
        }
    }
    return []
}