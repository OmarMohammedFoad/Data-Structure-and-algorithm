import random

def guess_game():
    want_to_continue=True
    random_num=0
    counter=0
    while(want_to_continue):
        random_num = random.randint(0,100);
        while(counter <10):
            inpt_num=input(f'please enter the number between 0 and 100: ')
            if(int(inpt_num)==random_num):
                print('congratulation!!')
                print(f'you have guessed the number in {counter} attempts')
                break
            else:
                print('please try again')
            counter+=1
        print('do you want to continue?')
        want_to_continue=input('yes or no')
        if(want_to_continue=='no'):
            want_to_continue=False
        elif(want_to_continue=='yes'):
            counter=0
            want_to_continue=True
    print('game over')
    
guess_game()
         
            
         
        