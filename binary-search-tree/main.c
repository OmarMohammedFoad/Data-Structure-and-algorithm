#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node{
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createRoot(int d)
{
    struct Node* node = (struct Node*) malloc(sizeof(struct Node));
    if(node){
    node->data = d;
    node->left= NULL;
    node->right= NULL;

    }
    return node;
}


struct Node * insertNode(struct Node* root,int d)
{
    if(root == NULL){
        return createRoot(d);
    }

    if(root->data == d){
        return root;
    }

    if(root->data > d){
        root->left = insertNode(root->left,d);
    }

    else{
        root->right = insertNode(root->right,d);
    }

    return root;
}

void inOrder(struct Node* node){
    if (node!=NULL)
    {
        inOrder(node->left);
        printf("%d\n",node->data);
        inOrder(node->right);
    }
    
}


void postOrder(struct Node* node){
    if(node!=NULL){
        postOrder(node->left);
        postOrder(node->right);
        printf("%d\n",node->data);
        

    }
}



void preOrder(struct Node* node){
    if(node!=NULL){
        printf("%d\n",node->data);
        preOrder(node->left);
        preOrder(node->right);
        

    }
}


int main (){

    struct Node* root = createRoot(1);
    root = insertNode(root, 2);
    root = insertNode(root, 3);
    root = insertNode(root, 4);
    root = insertNode(root, 5);


    // postOrder(root);
    // inOrder(root);
    preOrder(root);
return 0;
}