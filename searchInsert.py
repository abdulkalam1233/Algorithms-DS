class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        left = 0
        right = len(nums) - 1
        resultIndex = 0;
        while(left <= right):
            mid = (left + right) // 2
            midEle = nums[mid]
            if (midEle == target):
                return mid
            if (midEle > target):
                resultIndex = mid;
                right = mid - 1
            else:
                resultIndex = mid + 1;
                left = mid + 1
        return resultIndex
