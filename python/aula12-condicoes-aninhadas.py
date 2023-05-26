'''
    Caso eu deseje aninhar mais de um bloco de código, adicionando condições extras e que se "complementem", posso utilizar a palavra reservada `elif`

    Ela não é obrigatória, pois poderei utilizar dois `if` para fazer a mesma coisa.
    
    Ex.:
        if (condição 1):
            código1
        elif (condição 2):
            código2
        elif (condição 3):
            código3
        else:
            código4

#36
valor_casa = int(input('Informe o valor da casa: '))
salario = int(input('Informe o seu salário: '))
anos = int(input('Informe em quantos anos ela será paga: '))
valor_prestacoes = valor_casa/(12*anos)

porcentagem = valor_prestacoes / salario

if (porcentagem > 0.3):
    print(f'O valor de {valor_prestacoes} ultrapassa os 30% permitido.')
else:
    print('O seu empréstimo foi autorizado.')

# 38
first_value = int(input('Informe o primeiro valor '))
second_value = int(input('Informe o segundo valor '))

if (first_value > second_value):
    print('O primeiro valor é maior.')
elif (second_value > first_value):
    print('O segundo valor é maior.')
else:
    print('Os dois valores são iguais.')

price = float(input('Informe o valor do produto '))
payment_terms = (input('Informe o método de pagamento '))

if (payment_terms == 'dinheiro'):
    print(f'O valor do produto ficará em {price*0.9}')
elif (payment_terms == 'cartão'):
    print(f'O valor do produto ficará em {price*0.95}')
elif (payment_terms == '2x'):
    print('O valor do produto permanece o mesmo')
elif (payment_terms == '3x'):
    print(f'O valor do produto ficará em {price*1.2}')
'''
