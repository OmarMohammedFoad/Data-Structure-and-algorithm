#include <stdio.h>
#include <stdlib.h>
#include <string.h>


/* 

Create a global array of students of any size (100 elements for example)
Sort it by ID
Print it
Binary search by ID

 */
struct Student
{
    char name[10];
    int id;
    int grades[3];
};

struct Student arr[10];


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


void merge(struct Student  arr [],int Lb,int mid,int Up)
{
    int list1=Lb,list2= mid+1,i;
    struct Student temp[100];
    i = Lb;

    while (list1<=mid && list2<=Up)
    {

        if(arr[list1].id < arr[list2].id){
            temp[i] = arr[list1];
            list1++;
            i++;
        }

    else
        {
            temp[i] = arr[list2];
            list2++;
            i++;
        }

        
    }


if(list1<=mid){
    while (list1<=mid)
    {
          temp[i] = arr[list1];
            list1++;
            i++;
    }
    
}
else{
    while (list2<=Up)
    {
          temp[i] = arr[list2];
            list2++;
            i++;
    }

}
    for ( i = Lb; i <=Up; i++)
    {
        arr[i] = temp[i];
    }
}


struct Student binarySearch(struct Student arr[],int Lb,int Ub,int key)
{
    int mid;
    while (Lb<=Ub)
    {
        mid = (Ub+Lb) / 2;
        if(arr[mid].id == key){
            return arr[mid];
        }
        else if(arr[mid].id < key){
            Lb = mid+1;
        }
        else{
            Ub = mid-1;
        }
    }
    return arr[mid];
    
}
 



void mergeSort(struct Student arr[],int Lb,int Ub)
{

    int mid;
    if(Lb<Ub){
        mid = (Ub+Lb) / 2;
        mergeSort(arr,Lb,mid);
        mergeSort(arr,mid+1,Ub);
        merge(arr,Lb,mid,Ub);
    }
}





/* condition */
int main(){
int choice;
    struct Student s;

    while (1)
    {
        printf("\nMergeSort:\n");
        printf("1. enter data\n");
        printf("2. Display Queue\n");
        printf("3. Sort \n");
        printf("4. search for one\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        int num;

        switch (choice)
        {
        case 1:
            printf("\n enter the number of students :\n");
            scanf("%d",&num);
            printf("\n enter new student :\n");
            for (int i = 0; i < num; i++)
            {
                arr[i] = fill_Student();
            }
            
            break;

       

        case 2:
            printf("\nCurrent Queue:\n");
           
            
                for (int i = 0; i <= num; i++)
                {
                    printAll(arr[i]);
                }
        
            break;
        case 3:
            printf("\nCurrent Queue:\n");
           
            
                mergeSort(arr,0,num-1);
        
            break;
        case 4:
            printf("\nSearch for student");
            int key;
            scanf("%d",&key);
            
            s = binarySearch(arr,0,num-1,key);
            printAll(s);
             
            break;
        case 5:
            printf("Exiting...\n");
            return 0;

        default:
            printf("Invalid choice. Please try again.\n");
        }
    }   
}