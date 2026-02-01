/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let firstMin = Infinity;
    let secondMin = Infinity;
    for(let i=1; i<nums.length; i++)
    {
        if(firstMin>nums[i])
        {
            secondMin = firstMin;
            firstMin = nums[i];
        }
        else if(secondMin > nums[i]) secondMin = nums[i];
    }
    return nums[0] + firstMin + secondMin;
};