// Q1

function findCommonElements(arr1, arr2, arr3) {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }

    return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];

const commonElements = findCommonElements(arr1, arr2, arr3);
console.log(commonElements); // Output: [1, 5]


//   Q2

function findDistinctIntegers(nums1, nums2) {
    const distinctNums1 = nums1.filter(num => !nums2.includes(num));
    const distinctNums2 = nums2.filter(num => !nums1.includes(num));
    return [distinctNums1, distinctNums2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const distinctIntegers = findDistinctIntegers(nums1, nums2);
console.log(distinctIntegers); // Output: [[1, 3], [4, 6]]


//   Q3

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const transposedMatrix = [];
    for (let j = 0; j < numCols; j++) {
        const row = [];
        for (let i = 0; i < numRows; i++) {
            row.push(matrix[i][j]);
        }
        transposedMatrix.push(row);
    }

    return transposedMatrix;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposed = transposeMatrix(matrix);
console.log(transposed); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


// Q4

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
}

const nums = [1, 4, 3, 2];
const maxSum = arrayPairSum(nums);
console.log(maxSum); // Output: 4


//   Q5

function arrangeCoins(n) {
    let count = 0;
    let i = 1;

    while (n >= i) {
        n -= i;
        i++;
        count++;
    }

    return count;
}

const n = 5;
const completeRows = arrangeCoins(n);
console.log(completeRows); // Output: 2


//   Q6

function sortedSquares(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result.unshift(leftSquare);
            left++;
        } else {
            result.unshift(rightSquare);
            right--;
        }
    }

    return result;
}

const nums = [-4, -1, 0, 3, 10];
const squaredSorted = sortedSquares(nums);
console.log(squaredSorted); // Output: [0, 1, 9, 16, 100]


//   Q7

function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;

    for (let i = 0; i < ops.length; i++) {
        minRow = Math.min(minRow, ops[i][0]);
        minCol = Math.min(minCol, ops[i][1]);
    }

    return minRow * minCol;
}

const m = 3;
const n = 3;
const ops = [
    [2, 2],
    [3, 3]
];
const maxIntegers = maxCount(m, n, ops);
console.log(maxIntegers); // Output: 4



//   Q8

function shuffle(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(nums[i], nums[n + i]);
    }
    return result;
  }
  
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const rearranged = shuffle(nums, n);
  console.log(rearranged); // Output: [2, 3, 5, 4, 1, 7]
  