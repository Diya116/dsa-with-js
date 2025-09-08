/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum=Number.MIN_SAFE_INTEGER;
    let sum=0;
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i]
        if(sum > maxSum)
        {
            maxSum=sum;
        }
        if(sum<0)
        {
            sum=0;
        }
    }
    return maxSum;
};

// Todo:learning:
//?if sum of subarray becomes already negative adding more value just reduce the overall sum so if sum become negative make sum=0

