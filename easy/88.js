const merge = (nums1, m, nums2, n) => {
    let index1 = 0
    let index1Clone = 0
    let index2 = 0
    // Clone array to edit in-place.
    const nums1Clone = [...nums1]

    while (index1Clone < m || index2 < n) {
        // Check if within limits.
        const num1 = index1Clone < m ? nums1Clone[index1Clone] : Infinity
        const num2 = index2 < n ? nums2[index2] : Infinity

        if (num1 <= num2) {
            nums1[index1] = num1
            index1Clone++
        } else {
            nums1[index1] = num2
            index2++
        }
        index1++
    }
    return nums1
}

module.exports = {
    merge
}