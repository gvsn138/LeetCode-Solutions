/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next === null)return null;
    let s = head;
    let f = head;
    let t = null;
    while(f && f.next)
    {
        t=s;
        s=s.next;
        f=f.next.next;
    }
    t.next=s.next;
    return head;
};