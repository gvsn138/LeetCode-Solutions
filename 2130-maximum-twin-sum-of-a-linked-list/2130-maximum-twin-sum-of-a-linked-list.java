/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head)
    {
        if(head==null || head.next==null)return head;
        ListNode p = null, c = head, n = head.next;
        while(n!=null)
        {
            c.next=p;
            p=c;
            c=n;
            n=n.next;
        }
        c.next=p;
        return c;
    }
    public int pairSum(ListNode head) {
        ListNode s=head, f=head;
        while(f.next.next!=null)
        {
            s=s.next;
            f=f.next.next;
            
        }
        ListNode n = reverseList(s.next);
        s = head;
        int ans = 0;
        while(n!=null)
        {
            ans=Math.max(ans, s.val+n.val);
            s=s.next;
            n=n.next; 
        }
        return ans;
    }
}