'''
Os conhecimentos de JS serão úteis para essa parte.

- Fatiamento
    A string é considerada um array de caracteres, a seleção de um caractere específico funciona da mesma maneira que ocorre no JS.
        Ex.: nome = 'Alex Yudi'
                nome[0] => Vai selecionar a letra 'A'
    Uma outra forma é utilizar o ':' dentro do colchetes, o primeiro número eu indico onde começa a extração é o segundo é onde termina, porém esse índice não será utilizado.
        Ex.: string = 'Desejado'
                string[0:3] => Vai selecionar a parte 'Des', com o 3 ficando de fora.
    Uma outra particularidade é adicionar um outro ':' e, no terceiro termo eu informo a quantidade de caracteres que deve ser pulado em cada seleção.

- Análise
    - len(string)
        Essa função é responsável por informar o tamanho da string que está sendo informada.
    - string.count('letra')
        Essa função será responsável por contar quantas vezes uma determinada string aparece dentro da string original.
        Obs.: É possível adicionar argumentos que limites a parte da string que será verificada
            string.count('letra', 0, 15) => Lembrar que o 15 não será incluído, então as posições verificadas serão da 0 até a 14.
    - string.find('letra')
        Funciona da mesma maneira que no JS, vai indicar o índice da posição da primeira localização.
        Obs.: Se não for localizado nada, o retorno é -1
    - Operador 'in'
        Retorna True ou False na verificação se determinada string é localizada dentro de outra string.
            Ex.: 'string' in frase => Se houver, retorna o True

- Transformação
    - string.replace('string1', 'string2')
        Funciona da mesma maneira que o JS. O primeiro termo é o que será substituído e o segundo é o que será usado na substituição.
        Obs.: NÃO altera a string original.
    - string.upper()
        Deixará a string toda em maiúscula.
    - string.lower()
        Contrário do upper()
    - string.capitalize()
        Deixa APENAS o primeiro caractere de TODA a string maiúscula
    - string.title()
        Deixa as iniciais de cada parte da string com maiúscula.
    - string.strip()
        Remove os espaços extras no início ou no final da string (é igual o trim() do JS)
        
- Divisão
    - string.split()
        Funciona igual o do JS. Vai dividir a string em array.

- Junção
    - 'caractere'.join(array)
        A sintaxe é diferente, mas faz a mesma coisa que o do JS
        É necessário informar ANTES qual o tipo de caractere que será inserido na junção dos elementos do array que é passado para essa função.
'''

# Desafios
'''
nome = input('Digite seu nome: ')
print(nome.upper())
print(nome.lower())
print(len(nome.strip().replace(' ', '')))
print(len(nome.split()[0]))

# 24
Obs.: Para a resolução da 24, sem utilizar estruturas de condição e loops, acaba sendo necessário uma lógica com viés bem matemático.

num = int(input('Informe um número: '))
u = num // 1 % 10
d = num // 10 % 10
c = num // 100 % 10
m = num // 1000 % 10
print(f'Unidade: {u}')
print(f'Dezena: {d}')
print(f'Centena: {c}')
print(f'Milhar: {m}')


cidade = str(input('Digite seu nome: ')).strip()
split = cidade.split()
print(f'Primeiro nome: {split[0]}')
print(f'Sobrenome: {split[-1]}')


'''
