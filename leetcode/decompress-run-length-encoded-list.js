/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i +=2) {
        let freq = nums[i];
        let num = nums[i+1];
        
        while(freq--) {
            result.push(num);
        }
    }
    
    return result;
};
