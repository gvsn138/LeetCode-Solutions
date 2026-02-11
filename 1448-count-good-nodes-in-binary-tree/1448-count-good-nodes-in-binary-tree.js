/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let ans = 0;
    let solve = function(root, maxVal)
    {
        if(root==null)return;
        if(root.val>=maxVal)
        {
            maxVal=root.val;
            ans++;
        }
        solve(root.left, maxVal);
        solve(root.right, maxVal);
    }
    solve(root,root.val);
    return ans;
};