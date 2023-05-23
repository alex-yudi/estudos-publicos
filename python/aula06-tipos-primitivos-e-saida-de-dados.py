'''
Existem, basicamente, 4 tipos primitivos no python:
    - int (números inteiros)
    - float (número decimais/flutuantes)
    - bool (booleanos) obs.: Deve-se usar o True ou False com a inicial maiúscula.
    - str (strings)
'''

'''
OUTRA FORMA DE ESCREVER STRINGS COM VARIÁVEIS:

    f'coloco qualquer string e, ao adicionar variáveis, uso as chaves {variável}'
        => Ele funciona da mesma maneira que a template string, só que adiciono o 'f' no início e para chamar a variável utilizo somente as chaves.

'''
n1 = int(input('Digite um valor: '))
n2 = int(input('Digite outro valor: '))
print(
    f'A soma de {n1} com {n2} é {n1+n2}'
)
