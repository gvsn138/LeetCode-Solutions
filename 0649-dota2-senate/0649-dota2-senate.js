/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let Rarr = [];
    let Darr = [];
    let n = senate.length;
    for(let i=0; i<n; i++)
    {
        if(senate[i]==='D')Darr.push(i);
        else Rarr.push(i);
    }
    while(Rarr.length && Darr.length)
    {
        let rIdx = Rarr.shift();
        let dIdx = Darr.shift();
        if(rIdx<dIdx)
        {
            Rarr.push(rIdx+n);
        }
        else 
        {
            Darr.push(dIdx+n)
        }
    }
    return (Rarr.length>0) ? "Radiant" : "Dire";
};