function leaderArray(nums)
{
   let ans=[];
   let max=nums[nums.length-1];
   ans.push(max);
   for(let i=nums.length-1;i>=0;i--)
   {
        if(nums[i]>max)
        {
            ans.push(nums[i]);
            max=nums[i];
        }
   }
   return ans;
}