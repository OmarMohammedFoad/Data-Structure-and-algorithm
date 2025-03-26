def print_all_number_except_3_and_6(n):
    for i in range(1,n+1):
        if(i%3==0):
            continue
        print(i,end=" ")
    return 
print_all_number_except_3_and_6(10)