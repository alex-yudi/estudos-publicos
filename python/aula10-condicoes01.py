# sourcery skip: assign-if-exp, hoist-statement-from-if
'''
A ideia lógica para as condicionais são a mesma que o JS

A sintaxe é diferente, como o Python se baseia na indentação, ela vai ser da seguinte maneira:

    if condição:
        código se true
    else:
        código se false

=> Interessante notar que é IMPORTANTE usar o ":"

Além da sintaxe citada, existe, ainda, uma sintaxe simplificada que pode ser utilizada.
    'código se true'if condição else 'código se false'
        => Obs.: Achei essa forma "feia" e mais confusa.

import random
num_escolhido_pc = random.randrange(0, 6)
num_usuario = int(input('Informe um número: '))
if (num_escolhido_pc == num_usuario):
    print(f'Parabéns, eu escolhi o número {num_escolhido_pc} e você acertou!')
else:
    print(f'Que pena, eu escolhi o númro {num_escolhido_pc} e você errou.')

velocidade = int(input('Informa qual a velocidade do carro '))
if (velocidade > 80):
    multa = (velocidade - 80) * 7
    print(f'O valor da multa é {multa} reais')
else:
    print('Velocidade dentro do permitido.')

numero = int(input('Informe um número: '))
resto = numero % 2
if (resto == 0):
    print('Esse número é par.')
else:
    print('Esse número é ímpar.')

km = int(input('Informa a distância da sua viagem em km: '))
if (km <= 200):
    valor = km*0.5
    print(f'O valor da sua passagem é de {valor} reais.')
else:
    valor = km*0.45
    print(f'O valor da sua passagem é de {valor} reais.')


# 32 - ano bissexto
ano = int(input('Insira o ano que você deseja analisar: '))
if (ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0):
    print(f'O ano {ano} é BISSEXTO.')
else:
    print(f'O ano {ano} NÃO É BISSEXTO')

# 33 - Verificando valores
a = int(input('Primeiro valor: '))
b = int(input('Segundo valor: '))
c = int(input('Terceiro valor: '))
menor = a
if (b < a and b < c):
    menor = b
if (c < a and c < b):
    menor = c
maior = a
if (b > a and b > c):
    maior = b
if (c > a and c > b):
    maior = c
print(f'O maior valor é {maior}.')
print(f'O menor valor é {menor}')
'''

# 35 - Condições para os lados de um triângulo
r1 = float(input('Primeiro segmento: '))
r2 = float(input('Segundo segmento: '))
r3 = float(input('Terceiro segmento: '))
if (r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2):
    print('Os segmentos informados PODEM formar um triângulo.')
else:
    print('Os segmentos informados NÃO PODEM formar um triângulo.')
