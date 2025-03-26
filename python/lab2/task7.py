def reverse_word(s=""):
    
    new_word=""
    for i in range(len(s)-1,-1,-1):
        new_word+=s[i]
    return new_word

print(reverse_word("hello"))