// Introdução aos genéricos
/*
Por vezes, quando declaramos uma função, uma classe ou uma interface, não queremos definir exatamente qual o tipo de algum elemento que ele possuirá, pois isso acaba dependendo do momento em que ela for utilizada.

Caso seja utilizado o tipo 'any' ele pode gerar erros ou manipulações indevidas dos dados, pois esse tipo anula qualquer verificação que seria feita.

Para situações assim é possível utilizar os genéricos, eles funcionam igual parâmetros em uma função. Coloca-se ele nos locais que a tipagem não está definida e que só será definida no momento da chamada da função, por exemplo.

Sua declaração é através do '<>' e dentro das flechas coloca-se um nome qualquer, somente para que ele possa ser sinalizado ao longo do código (normalmente é utilizado a letra T)
Obs.: Eu posso considerar esses genéricos como variáveis que serão declaradas SOMENTE no momento que eu for chamar a função/interface/classe.

*/

function getArray<T>(item: T[]): T[] {
    return new Array<T>().concat(item);
}

getArray<number>([1, 2, 3]); // Para esse exemplo, na chamada da função getArray eu defino que o tipo aplicado para o genérico deve ser um number, logo, em TODOS os locais que tenham o 'T' ele será substituído pelo 'number', pode-se perceber pela definição da função que a tipagem já estava feita, faltando definifir especificamente qual o tipo que seria aplicado em cada local

getArray<string>(['joão', 'maria']) // Já nesse exemplo, as tipagens serão preenchidas com 'string'

// É possível utilizar mais de um tipo genérico no código, basta adicionar dentro do '<>', separado por vírgula.
function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

identity<string, number>('joão', 15);

// Utilizar restrições genéricas para limitar os tipos que podem ser declarados.
/*
Mesmo que deixemos o type como genérico, por vezes será necessário limitar para quais tipoes eles podem ser definidos, para evitar alguma tipagem indevida e que pode gerar erros futuros.

Para solucionar esse problema, declara-se um type com os tipos possíveis e utiliza-se a palavra 'extends' no genérico, criando essa limitação da tipagem.
Fora essa questão, ainda é necessário o tratamento interno para cada um dos tipos possíveis.
*/
type ValidTypes = string | number;

function identit1<T extends ValidTypes, U>(value: T, message: U) { // O extends é usado para aplicar a tipagem no T
    let result: ValidTypes = '';
    const typeValue: string = typeof value; // Essa variável possui qual o tipo que está sendo declarado

    if (typeof value === 'number') {
        result = value + value;
    }

    if (typeof value === 'string') {
        result = value + value;
    }

    console.log(`A mensagem é ${message} e a função retorna um tipo ${typeValue} com valor de ${result}`);

    return result
}

// Declarando uma interface genérica
/*
Assim como é possível fazer a declaração para funções, também é possível utilizar os genéricos na declaração de interfaces, sejam elas para uma variável, função ou classe.

O processo é basicamente o mesmo, sendo necessário utilizar o '<>' e adicionando os genéricos nos locais que for necessário.
*/

interface Identity<T, U> {
    value: T,
    message: U
}
const returnNumber: Identity<number, string> = {
    value: 25,
    message: "Hello"
}

interface FunctionGereric<T, U> { // Esse exemplo é a criação de uma interface utilizando genéricos para uma função.
    (value: T, message: U): T;
}

const functionGeneric: FunctionGereric<number, string> = (value, message) => { // É necessário lembrar que, para realizar a tipagem da função em si, é necessário utilizar Arrow Functions.
    console.log(message);
    return value;
}

// Declarar uma interface genérica para classes.
/*
É possível, também, definir uma interface genérica pra uma classe, o problema, porém, é que, devido ao nível de abstração, na criação dessa classe será necessário manter a declaração do tipo de maneira genérica, sendo possível definir os tipos somente quando o objeto for criado a partir dela.

A interface servirá, basicamente, para controlar como a classe será criada e onde serão os locais que terão o tipo definido futuramente.
*/
interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}
class processIdentity<X, Y> implements ProcessIdentity<X, Y> { // Nessa declaração de classe é possível verificar que os tipos de cada propriedade ainda não foram definidos, eles permanecem como 'incógnitas', onde serão definidas APENAS no momento de declaração do objeto a partir dessa classe.
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value;
    }
}

const processor = new processIdentity<number, string>(100, 'Hello'); // Somente nessa parte que os genéricos serão realmente definidos.

// Definir uma classe genérica
/*
Ao invés de declarar uma interface para depois declarar uma classe, é possível fazer a declaração de genéricos diretamente na criação de uma classe.

O processo segue o mesmo fluxo já utilizado anteriormente.
*/
class GenericosEmClasses<T, U> { // Toda a tipagem dos genéricos na declaração da classe já seguem o mesmo raciocínio e sintaxe já vista.
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }

    getIdentity(): T {
        console.log(this._message);
        return this._value
    }
}

const objeto = new GenericosEmClasses<number, string>(100, 'Hello'); // A declaração do objeto só possui o adicional de usar o "<>"


// Utilizando genéricos para "chamar" classes genéricas
/*
Além dos tipos primitivos, também é possível utilizar os genéricos no lugar de uma classe/subclasse desejada.
Por exemplo, se eu possui várias classes que se extendem de outra, posso criar uma função, utilizar um genérico no lugar do que seria uma dessas extensões e construí-la baseado nisso, fazendo com que, no momento que eu chamar essa função, eu informe qual classe eu desejo trabalhar e ter um resultado diferente a cada classe citada.
*/
class Carro1 {
    tipo: string = 'Carro Genérico';
    portas: number = 4;
}
class CarroEletrico1 extends Carro1 {
    tipo = 'Carro Elétrico';
    portas = 4;
}
class Caminhao extends Carro1 {
    tipo = "Caminhão";
    portas = 2;
}
function acelerar<T extends Carro1>(carro: T): T { // Nesse caso, estou definindo que o genérico T é uma extensão de carro, então posso adicionar qualquer classe existente em seu lugar que afunção irá funcionar. Também informo que a entrada e a saída da função terão o mesmo tipo do genérico, pois elas dependerão de qual classe será informada no momento que a função for chamada.
    // É IMPORTANTE NOTAR QUE COM O 'EXTENDS' PARA O GENÉRICO, ESTAMOS DELIMITANDO QUAL OS TIPOS QUE SÃO ACEITOS PARA A DECLARAÇÃO DO GENÉRICO. SE FOR UTILIZADO ALGO DIFERENTE DELE, SERÁ GERADO UM ERRO.
    console.log(`Todas as ${carro.portas} estão fechadas`);
    console.log(`O ${carro.tipo} está acelerando!`);
    return carro;
}

const meuCarroEletrico = new CarroEletrico1;
acelerar<CarroEletrico1>(meuCarroEletrico); // Nesse exemplo eu estou definindo que o genérico assumirá o valor da classe "CarroEletrico1" e a entrada da função é o objeto criado a partir dessa mesma classe.