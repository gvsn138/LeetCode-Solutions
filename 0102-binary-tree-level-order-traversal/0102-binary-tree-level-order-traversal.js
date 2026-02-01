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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = [];
    if(root==null)return arr;
    let q = [];
    q.push(root);
    while(q.length!==0)
    {
        let tmpArr = [];
        let n = q.length;
        for(let i=0; i<n; i++)
        {
            let tmepNode = q[0];
            q.shift();
            tmpArr.push(tmepNode.val);
            if(tmepNode.left)q.push(tmepNode.left);
            if(tmepNode.right)q.push(tmepNode.right);
        }
        arr.push(tmpArr);
    }
    return arr;
};