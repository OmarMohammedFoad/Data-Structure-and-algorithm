def print_name_in_reverse(first_name="",last_name=""):
    new_first_name=""
    new_second_name=""
    for i in range(len(first_name)-1,-1,-1):
        new_first_name+=first_name[i]
    
    if last_name:
        for i in range(len(last_name)-1,-1,-1):
            new_second_name+=last_name[i]
        return new_first_name+" "+new_second_name
    else:
        return new_first_name

