class Solution {
public:
    int longestBalanced(string s) {
        int ans = 0, n = s.size();
        for (int i = 0; i < n; i++) {
            unordered_map<char, int> mp;
            for (int j = i; j <n; j++) {
                mp[s[j]]++;
                int freq = mp.begin()->second;
                bool flag = true;
                for (auto [key, val] : mp) {
                    if (freq != val) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    ans = max(ans, j - i + 1);
                }
            }
        }
        return ans;
    }
};