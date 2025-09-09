//?all array elements must be positive
function getLongestSubarray(a, k) {
    let maxlen=0;
    let right=0;left=0;
    let sum=0;
    while(left<=right && right<a.length)
    {
      sum+=a[right];
      if(sum===k)
      {
        maxlen=Math.max(maxlen,right-left+1);
      }
      while(sum>k && right>=left)
      {
        sum-=a[left];
        left++;
      }
      right++;
    }
    return maxlen;
}