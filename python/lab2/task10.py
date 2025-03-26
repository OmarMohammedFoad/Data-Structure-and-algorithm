def calculate_num_of_digits_and_letters(str=""):
    digits=0
    letter=0
    for char in str:
        if char.isdigit():
            digits+=1
        if char.isalpha():
            letter+=1
            
    return digits,letter


print(calculate_num_of_digits_and_letters("omar123"))