def is_different(list=[]):
    new_set=set()
    for i in range(len(list)):
        
        new_set.add(int(list[i]))
    return len(list) == len(new_set)


# print(is_different([2,5,7,7,9]))
print(is_different([2,5,7,9]))