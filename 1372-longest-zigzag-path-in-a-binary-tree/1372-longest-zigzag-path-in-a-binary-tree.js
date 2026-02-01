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

var longestZigZag = function (root) {
    let maxPath = 0;
    var solve = function (root, left, right) {
        if (root == null) return;
        maxPath = Math.max(maxPath, left, right);
        solve(root.left, right + 1, 0);
        solve(root.right, 0, left + 1);
    }
    solve(root, 0, 0);
    return maxPath;
};