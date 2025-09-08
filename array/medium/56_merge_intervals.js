/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0]===b[0])
        {
            return a[1]-b[1];
        }
        return a[0]-b[0];
    });
    let ans=[];
    for(let i=0;i<intervals.length;i++)
    {
        let start=intervals[i][0];
        let end=intervals[i][1];
        while(i<intervals.length-1 && intervals[i+1][0]<=end)
        {
          end=Math.max(end,intervals[i+1][1]);
          i++;
        }
        ans.push([start,end])
    }
    return ans;
};