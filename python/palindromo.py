"""
a = "Sir I demand I am a maid named Iris"

print(a[::-1])
a[1]


def verificaPalindromo (palavra):
    return 'É palíndromo' if(palavra == palavra[::-1]): 
    
    else:
        return 'Não é palíndromo'


def isPalindrome(s):

    return s.lower().replace(" ", "") == s.lower().replace(" ", "")[::-1]


print(isPalindrome('Sir I demand I am a maid named Iris'))
"""


day = int(input("Day? > "))

phases = {1: "New Moon", 2: "New Moon", 3: "Wax Quarter", 4: "Wax Quarter",
          5: "Wax Half", 6: "Full Moon", 7: "Wax Gibbons", 8: "Wax Gibbons",
          9: "Full Moon", 10: "Wax Half", 11: "Wan Gibbons", 12: "Wan Gibbons",
          13: "Wan Half", 14: "Wan Half", 15: "Wan Quarter", 16: "Wan Quarter"}


remainder = day % 16
nextFullMoon = day

# The remainder values go from 0 to 15, but there's no day "0" in the game, so,
# whenever a day number divisible by 16 shows up, I just force the remainder to
# be 16 and index it to the "Wan Quarter" phase
if remainder == 0:
    remainder = 16

if remainder < 9:
    fullMoonDistance = 9 - remainder
elif remainder == 9:
    fullMoonDistance = 1
else:
    fullMoonDistance = 25 - remainder

nextFullMoon += fullMoonDistance

print(f'Tonight the moon phase will be "{phases[remainder]}"')
print(f'Next Full Moon: In {fullMoonDistance} day(s) [day {nextFullMoon}]')
