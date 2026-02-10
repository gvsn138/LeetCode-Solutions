class Solution {
public:
    int longestBalanced(vector<int>& nums) {
        int ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            unordered_set<int> evenSt;
            unordered_set<int> oddSt;
            for (int j = i; j < nums.size(); j++) {
                if (nums[j] % 2 == 0) {
                    evenSt.insert(nums[j]);
                } else {
                    oddSt.insert(nums[j]);
                }
                if (oddSt.size() == evenSt.size()) {
                    ans = max(ans, j - i + 1);
                }
            }
        }
        return ans;
    }
};