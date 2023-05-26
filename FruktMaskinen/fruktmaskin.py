import random

# skapa array med tuple
frukter = ("Apelsin", "Banan", "Melon", "Kiwi", "Citron")
looping = True

# Definerar funktion


def printfruit(userinput):
    fnr = int(userinput)
    print("\n" + frukter[fnr-1] + " Kommer Här!\n")


# Huvudprogram
print("\n-:FruktMaskin:\n")

while looping:
    i = 1
    for frukt in frukter:
        print(str(i) + ": " + frukt)
        i += 1

    fruktnr = input("\nMata in nummer på frukt du vill ha: ")
    printfruit(fruktnr)
    go = input("\nVill du ha en frukt till? (y/n) ")

    if go.lower() == "n":
        break

print("---------------------------------------------------------------")

print("\nFöresten, du får en frukt för du är snäll\n")
slumpfrukt = random.randint(0, len(frukter)-1)
printfruit(slumpfrukt+1)
