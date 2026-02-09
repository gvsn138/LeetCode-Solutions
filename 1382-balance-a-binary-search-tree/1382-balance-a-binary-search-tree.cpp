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
    vector<TreeNode*> inOrderArr;
    TreeNode* balanceBST(TreeNode* root) {
        if (!root)
            return root;
        solveInOrder(root);
        TreeNode* ans = solveCreateBTS(0, inOrderArr.size() - 1);
        return ans;
    }
    void solveInOrder(TreeNode* root) {
        if (!root)
            return;
        solveInOrder(root->left);
        inOrderArr.push_back(root);
        solveInOrder(root->right);
    }
    TreeNode* solveCreateBTS(int l, int h) {
        if (l > h)
            return NULL;
        int m = (l + h )/ 2;
        TreeNode* root = inOrderArr[m];
        root->left = solveCreateBTS(l, m - 1);
        root->right = solveCreateBTS(m + 1, h);
        return root;
    }
};