def bubble_sort(list=[]):
    for i in range(len(list)):
        for j in range(0,len(list)-1-i):
            if(list[j]>list[j+1]):
                temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
    

data = [-2, 45, 0, 11, -9]

bubble_sort(data)
print(data)