// Q1. Move Zeroes

let moveZeroes = function(nums) {
    // let's Taking Variables i & j which Initially index.no = 0
    let i = 0;
    let j = 0;

    // applying condition

    while(j < nums.length){
        if (nums[j] !== 0) {
            // If this condition true Swap nums[i] to nums[j] and modifying index of i by 1
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
        j++
    }
}
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

// Time complexity: O(n)
// Space complexity:  O(1)








  

