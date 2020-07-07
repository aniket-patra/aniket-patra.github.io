name = []
roll = []
age = []
bldgrp = []
city = []

count = 0
while True:
    x = input("Choose option:\n1. Insert Data\n2. Search Data\n3. Exit\n=> ")
    if x == '1':
        name.append(input("Enter your name: "))
        roll.append(input(name[count]+" enter your roll number: "))
        age.append(input(name[count]+" enter your age: "))
        bldgrp.append(input(name[count]+" enter your blood group: "))
        city.append(input(name[count]+" enter your city: "))
        count = count+1
    elif x == '2':
        x = input(
            "Enter any digit to search with roll number or Enter -1 to search with Name: ")

        if x != '-1':
            y = input("Enter your roll: ")
            if y in roll:
                z = roll.index(y)
                print("Name: "+name[z]+" Roll: "+y+" Age: " +
                      age[z]+" Blood Grp: "+bldgrp[z]+" City: "+city[z])
            else:
                print("Record not found!")
        elif x == '-1':
            y = input("Enter your name: ")
            if y in name:
                z = name.index(y)
                print("Name: "+y+" Roll: "+roll[z]+" Age: " +
                      age[z]+" Blood Grp: "+bldgrp[z]+" City: "+city[z])
            else:
                print("Record not found!")
    else:
        break

print("End")
