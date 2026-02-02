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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let node = null;
    let search = function(root, val)
    {
        if(root==null)return;
        if(root.val===val)node=root;
        search(root.left, val);
        search(root.right, val);
    }
    search(root,val);
    if(node==null)return null;
    return node;
};