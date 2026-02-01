/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let firstMin = nums[1];
    let fistIndex = 1;
    let secondIndex = 2;
    let secondMin = nums[2];
    for(let i=3; i<nums.length; i++)
    {
        if(firstMin>nums[i])
        {
            if(secondMin>firstMin)
            {
                secondMin=firstMin;
                secondIndex = fistIndex;
            }
            firstMin=nums[i];
            fistIndex=i;
        }
        if(secondMin>nums[i] && fistIndex!==i)
        {
            secondMin=nums[i];
            secondIndex=i;
        }
        
    }
    return nums[0] + nums[fistIndex] + nums[secondIndex];
};