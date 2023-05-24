'''
A importação de módulos pode ocorrer de duas maneiras:
    - Importar todo o módulo, seguindo a sintaxe:
        import nome_modulo
    - Importar apenas uma parte desse módulo, seguindo a sintaxe:
        from nome_modulo import parte_desejada
from math import sqrt
num = int(input('Adicione um número'))
raiz = sqrt(num)
print(raiz)

num = float(input('Adicione um número'))
print(num)
print(f'Seu inteiro é {int(num)}')

import math
cateto1 = int(input('Informe o valor do primeiro cateto'))
cateto2 = int(input('Informe o valor do segundo cateto'))
hipotenusa = math.sqrt((cateto1**2) + (cateto2**2))
print(f'O valor de sua hipotenusa é {hipotenusa}')

import math
angulo = float(input('Informe o valor do ângulo'))
seno = math.sin(angulo)
cosseno = math.cos(angulo)
tangente = math.tan(angulo)
print(
    f'O valor da tangente é {tangente}, o valor do seno é {seno} e o valor do cosseno é {cosseno}')
'''
import random
a1 = str(input('Primeiro aluno: '))
a2 = str(input('Segundo aluno: '))
a3 = str(input('Terceiro aluno: '))
a4 = str(input('Quarto aluno: '))
lista = [a1, a2, a3, a4]
print(f'O aluno que deve apagar o quadro é: {random.choice(lista)}')

random.shuffle(lista)
print(lista)
