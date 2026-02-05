/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let n=nums.length;
    let ans = [];
    for(i=0; i<n; i++)
    {
        let j = ((nums[i] + i) % n + n )% n;
        ans[i]=nums[j];
    }
    return ans;
};