// Q.1 Solution:

function arrayPairSum(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    let sum = 0;

    // Iterate over the sorted array, skipping one element each time
    for (let i = 0; i < nums.length; i += 2) {
        // Add the smaller number of each pair to the sum
        sum += nums[i];
    }

    return sum;
};


// Q.2 Solution:

var distributeCandies = function (candyType) {
    let set = new Set();
    for (let candy of candyType) {
        if (!set.has(candy)) {
            set.add(candy);
        }
        if (set.size == candyType.length / 2) return set.size;
    }
    return set.size;
};

// Q.3 Solution

var findLHS = function (nums) {
    const record = new Map()
    for (const num of nums) {
        record.set(num, (record.get(num) ?? 0) + 1)
    }
    let max = 0
    for (let low of record.keys()) {
        if (record.has(low + 1)) {
            max = Math.max(max, record.get(low) + record.get(low + 1))
        }
    }

    return max
};


// Q4. Solution

var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (
                (i === 0 || flowerbed[i - 1] === 0) &&
                (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
            ) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }

    return count >= n;
};


// Q5. Solution

var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b)

    var lastNumber = nums.length - 1
    var midNumber = nums.length - 2
    var firstNumber = nums.length - 3
    var total = nums[lastNumber] * nums[midNumber] * nums[firstNumber]
    return total
};

console.log(maximumProduct([1, 2, 3]));


// Q6. Solution

var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else if (target === nums[middle]) {
            return middle;
        }
    }
    return -1;
};


// Q7. Solution

var isMonotonic = function (nums) {
    let increasing = true
    let decreasing = true

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            increasing = false
        }
        if (nums[i] < nums[i + 1]) {
            decreasing = false
        }

    }

    return increasing || decreasing
};


// Q8. Solution

var smallestRangeI = function (nums, k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return Math.max(0, max - min - 2 * k)
};