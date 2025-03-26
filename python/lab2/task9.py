def fibb(n):
    first=0
    second=1
    for i in range(2,n):
        next=first+second
        first=second
        second=next
        print(next,end=" ")
    
    
fibb(50)