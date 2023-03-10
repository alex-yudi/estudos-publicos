// Funções nomeadas
function nomeFuncao(x: string, y: number, z?: boolean): string {
    return `A string é: ${x} e o number é: ${y}`;
}
/*
No caso acima, na declaração da função eu posso tipar os parâmetros passados para ela, da maneira que faria nas declarações de variáveis e também posso fazer a tipagem de qual deve ser o RETORNO da função.
        -> Após a declaração dos parâmetros, uso o : e adiciono a tipagem do retorno da função.
*/

// Funções anônimas
const addNumbers = function (x: number, y: number): number {
    return x + y;
}
/*
A estrutura da função anônima citada acima é semalhante a uma arrow function, porém, na prática, essa função não possui nome, mas está "guardada" em uma variável.
É interessante notar que a 'addNumbers' não precisa ser tipada, pois, por inferência, ela será do tipo number, por causa do retorno que a função possui.
*/

// Arrow function
const addNumbers2 = (x: number, y: number): number => x + y;
/* 
É importante lembrar que nesse exemplo acima não é necessário a palavra 'return' pois a declaração é simples, mas ela poderia ter sido completa, utilizando as chaves e, então, necessitando da palavra reservada 
*/

// Parâmetros opcionais
//OBS.: Os parâmetros opcionais só podem ser declarados APÓS a declaração dos obrigatórios.
function addNumbers3(x: number, y?: number): number {
    if (y === undefined) { // Como eu adiciono que o y pode ser opcional, dentro da função eu preciso fazer o tratamento para caso ele não seja adicionado quando a função for chamada.

        return x;
    } else {
        return x + y;
    }
}
addNumbers3(1, 2); // Returns 3
addNumbers3(1);    // Returns 1

// Parâmetro padrão
function addNumbers4(x: number, y = 25): number { // É possível declarar um tipo 'default' para um dos parâmetros, assim, caso não seja passado um valor para ele quando a função for chamada, o argumento terá esse valor padrão configurado.
    //OBS.: O PADRÃO SÓ PODE SER DECLARADO APÓS OS PARÂMETROS OBRITAGÓRIOS.
    return x + y;
}
addNumbers4(1, 2);  // Returns 3
addNumbers4(1);     // Returns 26

// Parâmetro Rest.
// Assim como no JS vanilla, é possível utilizar parâmetro rest para não delimitar a quantidade de argumentos passados na função, PORÉM é necessário tipar esse parâmetro, pois ele será um array com valores.
function addAllNumbers(
    firstNumber: number, ...restOfNumbers: number[]): number {
    let total: number = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
}

// Parâmetros de objetos descontruídos
/*
    Uma desvantagem na tipagem dos parâmetros é que a ordem que os argumentos são passadas é importante, podendo gerar erros se houverem muitos parâmetros que precisam ser passados.
    A forma de contornar esse tipo de situação com que o parâmetro fornecido seja um objeto, uma vez que a ordem das propriedades não importa, sendo necessário que as propriedades do objeto passado esteja, devidamente declarados.
    O ideal é criar uma interface para esse objeto e fazer a tipagem do parâmetro.
*/
interface Message { // Com a criação desse interface, faz-se a tipagem do parâmetro
    text: string;
    sender: string;
}

function displayMessage(messageParameter: Message) {
    console.log(`Message from ${messageParameter.sender}: ${messageParameter.text}`);
}

displayMessage({ sender: 'Christopher', text: 'hello, world' }); // É possível passar os argumentos dessa maneira ou encapsulá-lo em uma variável.
const messageExample: Message = {
    sender: 'Alex',
    text: 'Mensagem de exemplo'
}
displayMessage(messageExample);

// Definir tipos de Funções
/*
É possível eu definir um tipo/interface para funções, podendo fazer a tipagem da função diretamente com ela no meu código.
Isso torna útil caso eu possua um determinado padrão nas tipagens de funções utilizadas no código.
Na criação desse tipo, eu PRECISO fazer ela em formato de ARROW FUNCTION.
Se eu criar com a interface, eu declaro como FUNÇÃO ANÔNIMA;
*/
type Calculator = (x: number, y: number) => number;

interface Calculator2 {
    (x: number, y: number): number
}; // Ambos são declarações de tipos, porém feitas de maneiras diferentes com alguns detalhes diferentes no momento de utilização.
// Lembrar que a interface pode ser extendida.

const addNumbers5: Calculator = (x, y) => x + y;
const subtractNumbers: Calculator2 = (x, y) => x - y;
// Nesses casos, não preciso fazer a tipagem de cada elemento, pois a tipagem da função em si já foi realizada.
