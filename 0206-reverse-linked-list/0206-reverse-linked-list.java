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
    public ListNode reverseList(ListNode head) {
        if(head==null || head.next == null)return head;
        ListNode p = null;
        ListNode f = head;
        ListNode n = head.next;
        while(n!=null)
        {
            f.next=p;
            p=f;
            f=n;
            n=n.next;
        }
        f.next=p;
        return f;
    }
}