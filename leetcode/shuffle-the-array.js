/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    
    for (let i = 0; i < Math.floor(nums.length/2); i++) {
        result.push(nums[i], nums[i+n])
    }
    
    return result;
};