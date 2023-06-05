'''
Além da estrutura do `for`, existe, também a forma de repetição utilizando a palavra reservada `while`

Normalmente ele será utilizado quando não soubermos exatamente a quantidade de repetições que serão necessárias, porém sabemos que alguma condição deve ser atendida para que a repetição pare de ocorrer.

Sua sintaxe é:

    while condição:
        código

OBS.: DEVE-SE, SEMPRE, LEMBRAR DE COLOCAR UMA CONDIÇÃO PARA QUE A REPETIÇÃO PARE, SE NÃO ELE IRÁ EXECUTAR INFINITAMENTE.

    EX.:
        c = 0
        while c < 10:
            print('Executando')
            c += 1
        print('Encerrou')
'''
'''
# EX057
sexo = input('Digite o seu sexo: ')
# Na resolução ele usou str(input(....)).strip().upper()[0]
# Essa sequência acima seria o tratamento do input, para retirar espaços extras, deixar em caps a letra e garantir que é uma string que está sendo colocada.
repeticao = True
while (sexo != 'M' or sexo != 'F') and repeticao:
    if sexo == 'M':
        repeticao = False
        print('O seu sexo é masculino')
    elif sexo == 'F':
        repeticao = False
        print('O seu sexo é feminino')
    else:
        print('As entradas aceitas são somente "M" ou "F"')
        sexo = input('Digite o seu sexo: ')
# Ele fez de uma maneira beeeem mais compacta

while sexo not in 'MF':
    sexo = str(input('Dados inválidos. Por favor, informe seu sexo: ')).strip().upper()[0]


# EX059
sair = False
numero1 = int(input('Digite o primeiro valor: '))
numero2 = int(input('Digite o primeiro valor: '))

while (not sair):
    print(f'Os números escolhidos são {numero1} e {numero2}.')
    print('[1] somar')
    print('[2] multiplicar')
    print('[3] maior')
    print('[4] novos números')
    print('[5] sair do programa')
    entrada = int(input('Informe o tipo de operação desejada: '))
    if (entrada == 1):
        print(numero1 + numero2)
    elif (entrada == 2):
        print(numero1 * numero2)
    elif (entrada == 3):
        print(numero1 > numero2)
    elif (entrada == 4):
        numero1 = int(input('Digite o primeiro valor: '))
        numero2 = int(input('Digite o primeiro valor: '))
    elif (entrada == 5):
        sair = True
    else:
        print('Valor informado inválido.')
'''

# EX060
entrada = int(
    input('Informe um número para que seja calculado seu fatorial. '))
valor = entrada
valor_inicial = entrada
calculo = f'{valor}'

while entrada != 1:
    entrada -= 1
    calculo += f' x {entrada}'
    valor = valor * entrada

print(f'Calculando {valor_inicial}! = {calculo} = {valor}')
