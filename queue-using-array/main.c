#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student
{
    char name[10];
    int id;
    int grades[3];
};
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
struct Student printAll(struct Student s){
    printf("your id is : ");
    printf("%d", s.id);
    printf("\n");
    printf("your name is : ");
    printf("%s", s.name);
    printf("\n");
    printf("your grades are : ");
    for (int i = 0; i < 3; i++)
    {
        printf("%d", s.grades[i]);
        printf("\n");
    }

}

struct Student arr[10];
int front=-1;
int back=-1;

int enqueue(struct Student s)
{
    int inserted =0;
    if(front < 0){
        front = 0;
    }
    if (back<10)
    {
        back++;
        arr[back] = s;
        inserted = 1;
    }
    

    return inserted;
}


struct Student dequeue()
{
    struct Student s ; 
    if(front!=-1){
        s = arr[front];
        front++;
    }

    return s;
}

int main (){
    int choice;
    struct Student s;

    while (1)
    {
        printf("\nQueue Operations:\n");
        printf("1. Enqueue Student\n");
        printf("2. Dequeue Student\n");
        printf("3. Display Queue\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("\nEnqueue a new student:\n");
            s = fill_Student();
            enqueue(s);
            break;

        case 2:
            printf("\nDequeue a student:\n");
            s = dequeue();
            if (s.id != -1)
            {
                printAll(s);
            }
            break;

        case 3:
            printf("\nCurrent Queue:\n");
           
            
                for (int i = front; i <= back; i++)
                {
                    printAll(arr[i]);
                }
        
            break;

        case 4:
            printf("Exiting...\n");
            return 0;

        default:
            printf("Invalid choice. Please try again.\n");
        }
    }

}