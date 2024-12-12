#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node  * next;
};

struct Node* Hptr;
// struct Node* Tptr;


struct Node* midPointer(){
     struct Node *  current = Hptr;
     struct Node *  mid;
     int count=0;
     while (current!=NULL&&current->next!=NULL)
     {
        count++;
        current = current->next;
     }


     int mid = count/2;

     for (int i = 0; i < count; i++)
     {
        mid=mid->next;
     }



     return mid;
     


}



//there is alternative algorithm 


struct Node* midpointee(){
    struct Node* slow=Hptr;
    struct Node* fast=Hptr;
    while (fast!=NULL&&fast->next!=NULL)
    {
        slow = slow->next;
        fast = fast->next->next;

    }


    return slow;
    
}


struct Node* merge(struct Node*  L1,struct Node* L2){
     struct   Node* dummy =  Node(0);
       struct Node* cur = dummy;

        while (L1 && L2) {
            if (L1->val > L2->val) {
                cur->next = L2;
                L2 = L2->next;
            } else {
                cur->next = L1;
                L1 = L1->next;
            }
            cur = cur->next;
        }

        cur->next = L1 ? L1 : L2;

        return dummy->next;        
    

}














struct Node * createNode(int data){
   struct Node * ptr = (struct Node*) malloc(sizeof(struct Node));
    if(ptr){
        ptr->val = data;
        ptr->next = NULL;
    }

    return ptr;
}


int addNode(int data){
    struct Node * ptr = createNode(data);
 struct Node *  current = Hptr;
 int flag =0;
    if(ptr){
        flag=1;
        if(!Hptr){
            Hptr = ptr;
        }else{
            while (current->next){
                current = current->next;
            }

            current->next = ptr;
        }
    }
    return flag;
}


/*struct Node* sortList(struct Node* head) {
 struct  Node* current;
 int swapped =0;
   do
   {
        current = head;
        swapped = 0;
        while (current && current->next!=NULL)
        {
            int temp = 0;
            if(current->val > current->next->val){
                    temp = current->val;
                    current->val = current->next->val;
                    current->next->val = temp;
                    swapped = 1;    
            }
            current = current->next;
        }
    
   } while (swapped);
      return head;
}


*/
struct Node* sortList(struct Node* head) {
    if(head==NULL || head->next !=NULL) return head;
    
   struct Node*  mid= midpointee(head);
   struct Node* a = head;
   struct Node* b = mid->next;
    mid->next = NULL;
a = sortList(a);
b = sortList(b);

return merge(a,b);

}


void printList() {
    struct Node *current = Hptr;
    while (current) {
        printf("%d -> ", current->val);
        current = current->next;
    }
    printf("NULL\n");
}


int main() {
    addNode(10);
    addNode(20);
    addNode(30);

    printList(); 
    // sortList();

    return 0;
}





/**
 * split the list into two halves 
 * two pointers 
 * fast,slow
 * 
 * 
 * 
 * 
 */