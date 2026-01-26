/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        if(head->next==NULL)return NULL;
        ListNode *s = head;
        ListNode *f = head;
        ListNode *t = NULL;
        while(f && f->next)
        {
            t=s;
            s=s->next;
            f=f->next->next;
        }
        t->next=s->next;
        return head;
    }
};