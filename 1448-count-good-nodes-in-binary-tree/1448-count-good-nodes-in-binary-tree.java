/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int ans = 0;
    public void solve(TreeNode root, int maxVal)
    {
        if(root==null)return;
        if(root.val>=maxVal)
        {
            ans++;
            maxVal=root.val;
        }
        solve(root.left, maxVal);
        solve(root.right, maxVal);
    }
    public int goodNodes(TreeNode root) {
        int maxVal = root.val;
        solve(root, maxVal);
        return ans;
    }
}