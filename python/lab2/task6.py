def star_construct(n):
    star="*"
    for i in range(1,n+1):
        print(star*i)
        if i==n:
            for j in range(n-1,0,-1):
                print(star*j)
    return






star_construct(5)