const maxArea = (height) => {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)

        maxArea = Math.max(area, maxArea)

        // move up smallest side
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return maxArea
}