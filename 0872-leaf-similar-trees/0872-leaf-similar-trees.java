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
    public void solve(TreeNode root, ArrayList<Integer> ans)
    {
        if(root == null)return;
        if(root.left==null && root.right==null)ans.add(root.val);
        solve(root.left,ans);
        solve(root.right,ans);
    }
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        ArrayList<Integer> arr1 = new ArrayList<Integer>();
        ArrayList<Integer> arr2 = new ArrayList<Integer>();
        solve(root1, arr1);
        solve(root2, arr2);
        if(arr1.size() !=arr2.size())return false;
        for(int i=0; i<arr1.size(); i++)
        {
            if(!arr1.get(i).equals(arr2.get(i)))
            {
                return false;
            }
        }
        return true;
    }
}