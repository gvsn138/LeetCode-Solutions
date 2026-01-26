/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);
    let minAbsDiff = Infinity;
    let ans = [];
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i]-arr[i-1]<minAbsDiff)minAbsDiff=arr[i]-arr[i-1];
    }
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i]-arr[i-1] === minAbsDiff)ans.push([arr[i-1], arr[i]]);
    }
    return ans;
};