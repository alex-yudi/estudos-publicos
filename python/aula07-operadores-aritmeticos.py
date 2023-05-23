'''
Operadores aritméticos:

    A forma mais "difente" das operações, é a divisão, pois ela se divide em divisão e divisão inteira.
    - / => Utilizada para divisão, pode resultar em um float.
    - // => Utilizada para divisão inteira.
            A divisão inteira é, basicamente, a divisão até o ponto em que não ocorre o decimal.
                Ex.: O resultado de 5//2 seria 2.

A ordem de execução das operações segue as regras matemáticas.            

Obs.:
Com a multiplicação é possível fazer uma repetição de uma string.
    O 'string'*20 repetirá a palavra 'string' 20 vezes.
    
'''
""" 
n01 = int(input('Digite um número'))
print(f'Seu antecessor é {n01-1} e seu sucessor é {n01+1}')
print(
    f'O dobro dele é {n01*2}, seu triplo é {n01*3} e sua raiz quadrada é {n01**0.5}')

n1_aluno = int(input('Informe a primeira nota'))
n2_aluno = int(input('Informe a segunda nota'))
print(f'A média desse aluno é {(n1_aluno+n2_aluno)/2}')

n_metro = int(input('Informe a medida em metros'))
print(f'{n_metro} metros é o total de {n_metro*100} centímetros e {n_metro*1000} milímetros.') 

n_tabuada = int(input('Digite um número para saber sua tabuada.'))
print(f'{n_tabuada} x 1 = {n_tabuada*1}')
print(f'{n_tabuada} x 2 = {n_tabuada*2}')
print(f'{n_tabuada} x 3 = {n_tabuada*3}')
print(f'{n_tabuada} x 4 = {n_tabuada*4}')
print(f'{n_tabuada} x 5 = {n_tabuada*5}')
print(f'{n_tabuada} x 6 = {n_tabuada*6}')
print(f'{n_tabuada} x 7 = {n_tabuada*7}')
print(f'{n_tabuada} x 8 = {n_tabuada*8}')
print(f'{n_tabuada} x 9 = {n_tabuada*9}')
print(f'{n_tabuada} x 10 = {n_tabuada*10}')

n_real = int(input('Informe quantos reais você possui'))
print(f'Você pode comprar um total de {n_real/3.27} dólares.')

largura = int(input('Informe a largura da parede'))
altura = int(input('informe a altura da parede'))
total_de_tinta_em_litros = (largura*altura)/2
print(
    f'Será necessário o total de {total_de_tinta_em_litros} de litros de tinta para pintar a parede.')

preco_produto = int(input('informe o valor do produto'))
desconto = 0.05
novo_valor = preco_produto-(preco_produto*desconto)
print(f'O valor do produto com desconto de {desconto*100}% é {novo_valor}.')
"""

valor_salario = int(input('Informe o valor do salário'))
aumento = 0.15
novo_salario = round(valor_salario * (1+aumento))
print(f'Com o aumento de {aumento*100}% o valor ficará em {novo_salario}')
