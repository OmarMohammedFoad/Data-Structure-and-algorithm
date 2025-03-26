def diagonalDifference(arr):
    first_diagonse=0
    second_diagonose=0
    for i in range(0,3):
        first_diagonse+=arr[i][i]
        second_diagonose+= arr[i][len(arr)-1-i]    
    
    
            
    final_res = abs(first_diagonse-second_diagonose)
    return final_res

print(diagonalDifference([[11,2,4],
                          [4,5,6],
                          [10,8,-12]]))