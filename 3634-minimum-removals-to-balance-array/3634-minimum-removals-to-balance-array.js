/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a,b)=> a - b);
    let i = 0;
    let j = 0;
    let n = nums.length;
    let lsubarr = j-i+1;
    while(j<n)
    {
        let min = nums[i];
        let max = nums[j];
        while(i<j && max > min*k)
        {
            i++;
            min=nums[i];
        }
        lsubarr = Math.max(lsubarr, j-i+1);
        j++;
    }
    return n-lsubarr;
};