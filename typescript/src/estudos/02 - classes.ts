
class Carro implements Veiculo { // A utilização do 'implements' está explicada na seção 'Declarando interfaces para controle da classe'
    // Prop => Propriedades da classe. Tratam-se das propriedades que serão existentes no objetos criados.
    private _marca: string; // O uso da palavra 'private está explicado na seção comentada de 'Modificadores de acesso'
    private _cor: string;
    private _portas: number;
    private static numerosDeCarros: number = 0; // A definição de 'static' está explicado na seção 'Tipos de propriedades nas classes'

    // Constructor => Define quais parâmetros devem ser passados quando o objeto for criado a partir da classe informada e define onde cada parâmetro será usado dentro das propriedades que serão criadas. Ele será responsável por como os dados serão utilizados na construção do objeto
    constructor(marca: string, cor: string, portas = 4) {
        this._marca = marca;
        this._cor = cor;
        if ((portas % 2) === 0) {
            this._portas = portas;
        } else {
            throw new Error("As portas devem ter um número par!");

        }
        Carro.numerosDeCarros++; // Essa parte do código modificará uma propriedade estática da classe, que é explicada na seção 'Tipos de propriedades nas classes'
    }
    // Acessors => Delimita o que poderá ser acessado, seja para utilização ou definição. Nâo permitindo o acesso direto à uma propriedade ou método.
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get cor() {
        return `A cor do carro é ${this._cor}`;
    }
    set cor(cor) {
        this._cor = cor;
    }

    get portas() {
        return this._portas;
    }
    set portas(portas) {
        if ((portas % 2) === 0) {
            this._portas = portas;
        } else {
            throw new Error("As portas devem ter um número par!");

        }
    }

    // Methods
    acelerar(velocidade: number): string {
        return `${this.worker()} está acelerando para ${velocidade} km/h.`
    }

    frear(): string {
        return `${this.worker()} está freando com seu sistema de freio.`
    }

    virar(direcao: 'direita' | 'esquerda'): string {
        return `${this.worker()} está virando para a ${direcao}`
    }

    protected worker(): string { // O uso da palavra 'protected' está explicado na seção comentada de 'Modificadores de acesso'
        return this._marca;
    }

    static terNumeroDeCarros(): number { // A palavra 'static' é explicada na seção 'Tipos de propriedades nas classes'
        return Carro.numerosDeCarros;
    }
}

const meuCarro1 = new Carro('Ford', 'preto', 4);

console.log(meuCarro1.cor);
// console.log(meuCarro1._cor);

//  const meuCarro2 = new Carro('Ford', 'preto', 3);
// A declaração acima vai gerar erro, pois ocorre a verificação se o número de portas é par.

const meuCarro3 = new Carro('jumba', 'vermelho')
console.log(meuCarro3.portas, 'carro3')

console.log(meuCarro1.acelerar(35));
console.log(meuCarro1.frear());
console.log(meuCarro1.virar('direita'));

// Modificadores de acesso
/*
    Por padrão todos os dados usados na criação da classe são públicos, podendo ser acessados quando é feito a solicitação, mas nem sempre é interessante permitir esse acesso ao usuário.

    Para isso, é possível definir o tipo de acesso que será dado para uma propriedade ou um método existente dentro da classe.
    Antes da declaração do membro da classe, utilizo as palavras:
        public => Por padrão esse já é definido, permite acesso livre a ele, bem como sua modificação posterior por acesso direto no objeto criado.
        private => Esse membro não poderá ser acessado de fora da classe raiz (se for criado um objeto ou uma extensão de classe, ao tentar acessar esse membro, ele retornará um 'undefined')
        protected => Funciona de maneira semelhante ao private, porém está relacionado com o acesso de classes derivadas/extendidas, permitindo o acesso a partir delas. As classes extendidas poderão acessar a propriedade/método criado
*/

// Tipos de propriedades nas classes
/*
    Existem dois tipos de propriedade: a de instância e as estáticas
    A de instância serão aquelas propriedades que serão setadas SEMPRE que um novo objeto for criado, elas são chamadas dentro do próprio objeto criado.
    
    As estáticas são PRÓPRIAS DA CLASSE e TODOS os objetos compartilham a mesma informação. Para ter o acesso à elas, não consigo através do objeto criado, apenas a partir da classe existente.
        => Por exemplo, não conseguiria acessar por objetoCriado.propEstatica
            - Porém, conseguiria através do ClasseDoObjeto.propEstatica
        Para criar uma propriedade estática, devo utilizar a palavra reservada 'static' antes da declaração.
*/
console.log(Carro.terNumeroDeCarros()) // Vai imprimir a quantidade de carros criadas até o momento.

// Extendendo uma classe
/*
Para criar uma 'subclasse' é necessário utilizar a palavra reservada 'extends', o resto da declaração é semelhante à criação de uma classe raiz, tendo a diferença da necessidade de usar o 'super()' para preencher os dados referentes à classe-pai
A importância dessa subclasse é o reaproveitamento das declarações feitas anteriormente e a possibilidade de adicionar novos elementos por alguma eventual necessidade.
*/
class CarroEletrico extends Carro {
    // Prop
    private _distancia: number

    // Constructor
    constructor(marca: string, cor: string, distancia: number, portas = 2) {
        super(marca, cor, portas) // Aqui na super será necessário passar os parâmetros do constructor, pois a subclasse criada possuirá os dados da classe superior a ela, precisando preencher esses dados e, ainda, preencher os dados próprios.
        this._distancia = distancia;
    }

    // Acessors
    get distancia() {
        return this._distancia
    }
    set distancia(distancia) {
        this._distancia = distancia
    }

    // Methods
    carregar() {
        console.log(this.worker() + ' está carregando') // Nesse método se mostra a importância de usar o 'protected' para acesso ao invés do 'private'. Caso seja utilizado o 'private' na declaração da classe-pai, a utilização do 'worker()' geraria erro.
    }

    frear(): string { // Aqui é demonstrado que é possível sobrescrever os dados da classe-pai, porém o retorno tipado anteiormente deve permanecer o mesmo.
        return `${this.worker()} está freando com um sistema diferente.`
    }
}

const spark = new CarroEletrico('Spark', 'Azul', 125, 4);
console.log(spark.portas);
spark.carregar();
console.log(spark.frear());

// Declarando interfaces para controle da classe
/*
É possível fazer declaração de uma interface para que seja possível ter um controle sobre a forma e os parâmetros inseridos dentro de uma classe.
É importante salientar que não é possível fazer a declaração de tipos de parte privadas dentro da classe.
Para que a classe como um todo seja tipada a partir da interface criada é necessário utilizar a palavra 'implements' ao invés o ':' utilizado normalmente.
*/
interface Veiculo {
    marca: string;
    cor: string;
    portas: number;
    acelerar(velocidade: number): string;
    frear(): string;
    virar(direcao: 'esquerda' | 'direita'): string;
}

// Considerações sobre o design
/*
É interessante perceber que, pelo Typescript, é possível definir a estrutura que os objetos devem ser escritos:
    - Utilizando a INTERFACE;
    - Utilizando CLASSE;

A principal diferença entre elas é a parte de definição sobre o que o objeto deve realizar.
    => A Interface irá, EXCLUSIVAMENTE, definir como os dados do objeto devem ser estruturados, sendo, inclusive, mais leve, já que ele sequer é transpilado para JS.
    => A Classe permite um leque maior de opções, pois a partir dele, além de definir a estrutura, também é posspivel definir detalhes da implementação, bem como definir métodos e formas que os dados devem ser tratados em seu interior.
*/