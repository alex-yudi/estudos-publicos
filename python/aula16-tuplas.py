'''
Existem "dois" tipos de variáveis no python.

- As variáveis simples, que já foram vistas
- As variáveis compostas, que ainda se dividem em outras três (tuplas, listas e dicionários)

As tuplas funcionam com a mesma lógica de arrays do JS.
Para acessar diretamente um dos elementos dentro ele, uso o `[]` indicando qual o índice do elemento que quero acessar.
    => Ele vai seguir a mesma lógica de fatiamento das strings
        [:6] -> Acessa do primeiro até o índice 5
        [4:] -> Acessa do índice 4 até o final

=> Estrutura de repetição:
    for c in `tupla`:
        código
Esse código acima vai funcionar igual o `for in` do JS.

********************************************************

                OBS.: TUPLAS SÃO IMUTÁVEIS
                Se eu quiser alterar uma tupla,
                devo redeclarar seus valores

********************************************************

sintaxe:

lanche = ('suco', 'pizza', 'pudim')
    -> Posso escrever a mesma coisa sem o parênteses, ele vai funcionar também.

-> Trabalhando com loops:

    for comida in lanche
        print(f'Eu vou comear {comida}')

    for cont in range (0,len(lanche)):
        print(f'Eu vou comer {lanche[cont]} na posição {cont}')
        
    for pos, comida in enumerate(lanche):
        print(f'Eu vou comer {comida} na posição {pos}')
        
-> É possível fazer ordenação, utilizando o `sorted`
    Ex.:
        sorted(lanche)
        # Obs.: Isso NÃO ALTERA a tupla original.
        # Isso vai ordenar os elementos da tupla, 

nomes = ('João', 'Maria', 'Pedro')
nomes = ('Miranda')
print(nomes)


# 072
numeros = ('Zero', 'Um', 'Dois', 'Três', 'Quatro',
           'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez')

valor = int(input('Informe um número de 0 a 10 '))
while (valor > 10):
    valor = int(input('Tente novamente. Informe um número de 0 a 10 '))

print(numeros[valor])

# 073
times = ('Botafogo', 'Palmeiras', 'Atlético-MG', 'Grêmio', 'Flamengo',
         'Fluminense', 'Athletico-PR', 'São Paulo', 'Fortaleza', 'Cruzeiro')

print(times[:5])
print(times[:-6:-1])
print(sorted(times))
print(times.index('Fluminense')+1)

# 074 
from random import random
number = (round(random()*10), round(random()*10),
          round(random()*10), round(random()*10), round(random()*10))
=> A MANEIRA QUE A TUPLA FUNCIONA NÃO PERMITE USAR O FOR PARA FAZER O PREENCHIMENTO DOS ELEMENTOS.
print(sorted(number))
print(sorted(number)[0])
print(sorted(number)[-1])



# 075
a = int(input('Digite o primeiro número: '))
b = int(input('Digite o segundo número: '))
c = int(input('Digite o terceiro número: '))
d = int(input('Digite o quarto número: '))

tupla = (a, b, c, d)

pares = 0

for numero in tupla:
    if (numero % 2 == 0):
        pares += 1

print(f'O número 9 apareceu {tupla.count(9)} vezes')
if (tupla.count(3) == 0):
    print('Não foi digitado número 3')
else:
    indice3 = tupla.index(3)
    print(f'O índice do número 3 é {indice3}')
print(f'Foram digitados {pares} números pares')


# 076
produtos = ('Pão', 1, 'Leite', 3.50, 'Bolo', 10)

print('----------------------------------------------------')
print('LISTAGEM DE PREÇOS')
print('----------------------------------------------------')

for count in range(0, len(produtos), 2):
    print(f'{produtos[count]}.....................R$ {produtos[count+1]}')



# 077 -> Ver resolução
vogais = 'aeiou'

lista_palavras = ('Aprender', 'Programar')

vogais_palavra = ''

for palavra in lista_palavras:
    for letra in palavra:
        if letra.lower() in vogais:
            vogais_palavra += f' {letra.lower()}'
    print(f'Na palavra {palavra.upper()} temos{vogais_palavra}')
    vogais_palavra = ''
'''

a = 1
b = 2
(a, b) = (b, a)
c = (a, b)
d = (b, a)
print(c)
print(d)
print(a, 'a')
print(b, 'b')
