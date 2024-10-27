n = int(input("Enter the Height of the Triangle: "))

printing_str = ''
num = 1
for k in range(1, n+1):
    printing_str += str(num) + ' '
    num +=2
    print(printing_str)

