#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
struct Student
{
    char name[10];
    int id;
    int grades[3];
};

struct Node{
    struct Student student;
   struct  Node* next; 
};

struct Node* Hptr;
struct Node* Tptr;
struct Node *createNode(struct Student student)
{
    struct Node *ptr;

    ptr = (struct Node *)malloc(sizeof(struct Node));
    if (ptr)
    {
        ptr->student = student;
        ptr->next = NULL;
    }
    return ptr;
}

struct Student fill_Student()
{
    struct Student s;
    printf("please enter the id \n");
    scanf("%d", &s.id);
    printf("please enter the name \n");
    scanf("%s", s.name);
    printf("please enter the grades \n");
    for (int i = 0; i < 3; i++)
    {
        scanf("%d", &s.grades[i]);
    }

    return s;
};


void push (struct Student student){
    struct Node* ptr = createNode(student);
    if(Hptr==NULL){
        Hptr = Tptr = ptr;
    }else{
        Tptr->next = ptr;
        Tptr = ptr;
    }
}



struct Student pop(){
    struct Student s;

    if(Hptr !=NULL){
    if(Hptr == Tptr) // there is one element in the stack
    {   
        s = Tptr->student;
        free(Tptr);
        Hptr = Tptr = NULL;
    }else
    {
        struct Node* ptr = Hptr;

        while(ptr&&ptr->next !=Tptr){
            ptr = ptr->next;
        }

        s = Tptr->student;
        free(Tptr);
        Tptr = ptr;
        Tptr->next = NULL;

    }

    return s;
    }






}




void printAll()
{
    struct Node *ptr = Hptr;
    if (!ptr)
    {
        printf("The list is empty.\n");
        return;
    }
    printf("Student Details:\n");
    while (ptr)
    {
        printf("Name: %s\n", ptr->student.name);
        printf("ID: %d\n", ptr->student.id);
        printf("Grades: ");
        for (int i = 0; i < 3; i++)
        {
            printf("%d ", ptr->student.grades[i]);
        }
        printf("\n\n");
        ptr = ptr->next;
    }
}


int main(){
        int choose = 0;

    do
    {
        printf("\nMenu:\n");
        printf("1: Add Students\n");
        printf("2: Delete by location\n");
        printf("3: Print All Students\n");
        printf("4: Exit\n");
        printf("Your choice: ");
        scanf("%d", &choose);
        switch (choose)
        {
        case 1:
        {
            printf("How many students do you want to add? ");
            int number_students = 0;
            scanf("%d", &number_students);
            for (int i = 0; i < number_students; i++)
            {
                push(fill_Student());
            }
            break;
        }
        case 2:
        {
            
          
            struct Student s = pop();
            printf("%d",s.name);
            printf("%s",s.name);
            for (int i = 0; i < 3; i++)
            {
                printf("%d",s.grades[i]);
            }
            

            break;
        }
        case 3:
            printf("All Students:\n");
            printAll();
            break;
        case 4:
            printf("Exiting program.\n");
            break;
        default:
            printf("Invalid choice. Please try again.\n");
            break;
        }
    } while (choose != 4);

    // freeList();
    return 0;

}