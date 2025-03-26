def remove_adjacent_duplicates(lst):
    if not lst:
        return []

    result = [lst[0]]  
    for i in range(1, len(lst)):
        if lst[i] != lst[i - 1]:  
            result.append(lst[i])

    return result


list = [4, 4, 4, 4, 5, 6, 6, 7]
print(remove_adjacent_duplicates(list))
