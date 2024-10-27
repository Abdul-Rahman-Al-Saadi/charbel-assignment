diamond_size = int(input("Enter the size of the diamond: "))

if diamond_size < 0:
    print("Unacceptable Input, use positve integers only")
else:
    for i in range (1, diamond_size+1):
        print(" "*(diamond_size-i), end="")
        stars = i*2-1
        print("*"*stars)

    for i in range(diamond_size-1, 0, -1):
        print(" "*(diamond_size-i), end="")
        stars = i*2-1
        print("*"*stars)