'''
Existirão casos em que, quando determinada condição for satisfeita, queremos que toda a estrutura de repetição seja encerrada.

A palavra reservada para que isso seja feito é o `break`
    => Ele funciona DA MESMA MANEIRA que o `break` do JS.

Assim como no JS, usa-se o `break` ém conjunto com uma condicional.

# 066
contador = soma = 0

while True:
    valor_digitado = int(input('Digite um valor (999 para parar): '))
    if (valor_digitado == 999):
        break
    soma += valor_digitado
    contador += 1

print(f'Foram digitados {contador} números e a soma totaliza {soma}.')
'''

# 067
valor = int(input('Quer ver a tabuada de qual valor? '))

while True:
    if (valor < 0):
        print('PROGRAMA ENCERRADO! VOLTE SEMPRE.')
        break
    for c in range(1, 11):
        print(f'{valor} x {c} = {valor * c}')
    valor = int(input('Quer ver a tabuada de qual valor? '))
