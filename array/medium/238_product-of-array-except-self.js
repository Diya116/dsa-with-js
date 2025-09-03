/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefixarray=[];
    let suffixarray=[];
    let ans=[];
    let n=nums.length;
    //create prefixarray
    prefixarray[0]=nums[0];
    for(let i=1;i<n;i++)
    {
     prefixarray[i]=prefixarray[i-1]*nums[i];
    }
    suffixarray[n-1]=nums[n-1];
    for(let i=n-2;i>=0;i--)
    {
     suffixarray[i]=suffixarray[i+1]*nums[i];
    }
    ans[0]=suffixarray[1];
    ans[n-1]=prefixarray[n-2];
    for(let i=1;i<n-1;i++)
    {
        ans[i]=prefixarray[i-1]*suffixarray[i+1];
    }
    return ans;
};