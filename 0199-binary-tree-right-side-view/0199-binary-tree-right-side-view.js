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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let arr = [];
    let solve = function(root, count)
    {
        if(root==null)return 0;
        if(arr.length == count)arr.push(root.val);
        solve(root.right, count+1);
        solve(root.left, count+1);
    }
    solve(root, 0);
    return arr;
};