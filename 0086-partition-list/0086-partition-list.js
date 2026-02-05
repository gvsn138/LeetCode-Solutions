/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let greaterHead = new ListNode(0);
    let smallerHead = new ListNode(0);
    let greater = greaterHead;
    let small = smallerHead;
    let curr = head;
    while(curr)
    {
        if(curr.val<x)
        {
            small.next=curr;
            small=small.next;
        }
        else
        {
            greater.next=curr;
            greater=greater.next;
        }
        curr=curr.next;
    }
    greater.next=null;
    small.next=greaterHead.next;
    return smallerHead.next;
};