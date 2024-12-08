#include <stdio.h>   
#include <stdlib.h>  
#include <string.h>  
struct Student {
    char  name[10];
    int id;
    int grades[3];

};
struct Node {
    struct Student student;
    struct Node * next;
    struct Node * prv;
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

struct Node * Hptr;
struct Node * Tptr;

struct Node * createNode(struct Student student){
    struct Node * ptr;

    ptr = (struct Node *) malloc(sizeof(struct Node));
    if(ptr){
        ptr->student = student;
        ptr->next = NULL;
        ptr->prv = NULL;

    }
    return ptr;
}



int addNode (struct Student student){
    struct Node * ptr;
    ptr = createNode(student);
    int flag = 0;
    if(ptr){
        flag = 1;
        if(Hptr == NULL) //noList
        {
            Hptr = Tptr = ptr;
        }else
        {

            Tptr->next = ptr;
            ptr->prv = Tptr;
            Tptr = ptr;
        }
    }
    return flag;
}





int insertNode(struct Student student,int loc){
    int flag=0,i=0;
    struct Node * ptr,*temp;
    ptr = createNode(student);
    if(ptr){
        flag=1;
        if(Hptr == NULL) //nolist
        {   
            Hptr = Tptr = ptr;
        }else //exits
        {
            if(loc ==0) // first node
            {
                ptr->next = Hptr;
                Hptr->prv = ptr;
                Hptr = ptr;  
            }
            else  // middle or last
            {
                temp = Hptr;

                for (i = 0; i < loc-1 && temp; i++)
                {
                    temp = temp->next;
                }
                if(temp == Tptr || temp == NULL) //last node
                {
                    ptr->prv = Tptr;
                    Tptr->next = ptr;
                    Tptr= ptr;
                }else
                {
                    temp->next->prv = ptr;
                    ptr->next = temp->next;
                    ptr->prv = temp;
                    temp->next = ptr;
                }
                
            }
        }
    }
    return flag;
}


void freeList(){
    struct Node *ptr;
    while (Hptr)
    {
        ptr = Hptr;
        Hptr=Hptr->next;
        free(ptr); 
    }
    Tptr = NULL;
}


struct Student * searchWithName(char * name){
    struct Node* ptr;
    ptr = Hptr;
    while (strcmp(name,ptr->student.name)!=0 && ptr)
    {
        ptr = ptr->next;
    }

    if(!ptr){
        return NULL;
    }
    return &ptr->student;
    
}


struct Student * searchWitId(int id){
      struct Node* ptr;
    ptr = Hptr;
    while (id != ptr->student.id&& ptr!=NULL)
    {
        ptr = ptr->next;
    }

    if (!ptr)
    {
        return NULL;
    }
    


    return &ptr->student;
}






void printAll() {
    struct Node *ptr = Hptr;
    if (!ptr) {
        printf("The list is empty.\n");
        return;
    }
    printf("Student Details:\n");
    while (ptr) {
        printf("Name: %s\n", ptr->student.name);
        printf("ID: %d\n", ptr->student.id);
        printf("Grades: ");
        for (int i = 0; i < 3; i++) {
            printf("%d ", ptr->student.grades[i]);
        }
        printf("\n\n");
        ptr = ptr->next;
    }
}




int main() {
    int choose = 0;

    do {
        printf("\nMenu:\n");
        printf("1: Add Students\n");
        printf("2: Insert a Student\n");
        printf("3: Search by Name\n");
        printf("4: Search by Id\n");
        printf("5: Print All Students\n");
        printf("6: Exit\n");
        printf("Your choice: ");
        scanf("%d", &choose);
        switch (choose) {
        case 1: {
            printf("How many students do you want to add? ");
            int number_students = 0;
            scanf("%d", &number_students);
            for (int i = 0; i < number_students; i++) {
                addNode(fill_Student());
            }
            break;
        }
        case 2: {
            printf("Insert the student's details:\n");
            struct Student student = fill_Student();
            printf("Enter the location to insert the student: ");
            int loc = 0;
            scanf("%d", &loc);
            insertNode(student, loc);
            break;
        }
        case 3: {
            printf("Enter the name of the student to search for: ");
            char name[20];
            scanf("%s", name);
            struct Student* student = searchWithName(name);
            if (student) {
                printf("Name: %s\n", student->name);
                printf("ID: %d\n", student->id);
                printf("Grades: %d %d %d\n", student->grades[0], student->grades[1], student->grades[2]);
            } else {
                printf("Student not found.\n");
            }
            break;
        }

         case 4: {
            printf("Enter the ID of the student to search for: ");
            int id;
            scanf("%d", &id);
            struct Student* student = searchWitId(id);
            if (student) {
                printf("Name: %s\n", student->name);
                printf("ID: %d\n", student->id);
                printf("Grades: %d %d %d\n", student->grades[0], student->grades[1], student->grades[2]);
            } else {
                printf("Student not found.\n");
            }
            break;
        }
        case 5:
            printf("All Students:\n");
            printAll();
            break;
        case 6:
            printf("Exiting program.\n");
            break;
        default:
            printf("Invalid choice. Please try again.\n");
            break;
        }
    } while (choose != 6);

    freeList();
    return 0;
}
