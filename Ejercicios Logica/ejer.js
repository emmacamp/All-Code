nums1 = [1, 2, 3, 0, 0, 0]
nums2 = [2, 5, 6]
m = 3
n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


function merge(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a, b) => a - b)
    console.log(nums1)
}

merge(nums1, m, nums2, n)
// console.log(nums1)









/* 
array = nums1.concat(nums2).sort((a, b) => a - b)

for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        array.splice(i, 1);

    }

}

console.log(array); */