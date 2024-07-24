import random

def random_num_loop():
    num = random.randint(0,10)
    print(num)
    if num % 2 == 0:
        print("yes")
        return 0
    print("no")

random_num_loop()
random_num_loop()
random_num_loop()
random_num_loop()
