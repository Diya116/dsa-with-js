// 560. Subarray Sum Equals K
//https://leetcode.com/problems/subarray-sum-equals-k/description/
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map=new Map();
    let sum=0;
    let count=0;
    map.set(0,1);
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i];
        if(map.has(sum-k))
        {
            count+=map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0)+1);
    }
    return count;
};

//this is optimal approach for solving subarray count with sum=k
//we will create one map which include value of (prefixsum,count)
//so each prefix sum is sum of subarray till ith position
//now sum of prefix sum=x
//now we want subarray with (x-k) prefix sum so if we cut that subarray we will get subarray with sum=k

//Time Complexity:O(n) (each element processed once and set(),get(),has() has o(1))
// Space Complexity:o(n) (in worst case when each prefix sum is unique)
