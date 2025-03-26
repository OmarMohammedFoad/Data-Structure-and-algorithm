def divide_str(str="",str2=""):
    length = len(str)
    half1=""
    half2=""
    
    if(length%2==0):
        for i in range(0,int(length/2)):
            half1 += str[i]
        for i in range(int(length/2),length):
            half2 += str[i]
    elif(length%2!=0):
         for i in range(0,int(length/2)):
            half1 += str[i] 
         for i in range(int(length/2),length):
            half2 += str[i]

    return [half1,half2]            


print(divide_str(""))