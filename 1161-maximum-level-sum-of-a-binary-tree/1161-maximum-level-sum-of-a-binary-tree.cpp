/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    int ans = 0;
    void solve(TreeNode* root) {
        if (root == NULL)
            return;
        queue<TreeNode*> q;
        q.push(root);
        int maxSum = root->val;
        int level = 1;
        ans = level;
        while (q.size()) {
            int tSum = 0;
            int n = q.size();
            for (int i = 0; i < n; i++) {
                TreeNode* temp = q.front();
                tSum += temp->val;
                q.pop();
                if (temp->left)
                    q.push(temp->left);
                if (temp->right)
                    q.push(temp->right);
            }
            if(tSum>maxSum)
            {
                maxSum=tSum;
                ans=level;
                tSum=0;
            }
            level++;
        }
    }
    int maxLevelSum(TreeNode* root) {
        solve(root);
        return ans;
    }
};