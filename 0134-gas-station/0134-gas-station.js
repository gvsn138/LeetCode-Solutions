/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tempGas = 0;
    let ans = 0;
    for(let i=0; i<gas.length; i++)
    {
        totalGas+=gas[i];
        totalCost+=cost[i];
        tempGas+=gas[i]-cost[i];
        if(tempGas<0)
        {
            ans=i+1;
            tempGas=0;
        }
    }
    return (totalGas>=totalCost) ? ans : -1;
};