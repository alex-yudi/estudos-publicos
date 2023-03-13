// Introdução a namespaces
/*
A utilização de namespaces é útil para quando é necessário não se preocupar muito com nomenclaturas duplicadas.

A sua escrita é semelhante é objetos, o namespace possuirá um nome e, dentro dele, serão incluídos as funções que serão aplicadas a ele e, quando for necessário utilizar essa função, será necessário acessar o namespace e, então, chamar a função correspondente.

Ao declarar os elementos dentro do namespace eles possuirão escopo local, sendo globais APENAS se elas forem sinalizadas para 'export'

*/

namespace nomeEscolhido1 { // Cada um desses é um namespace diferente.
    function saudacao(mensagem: string) {
        console.log(`Essa é a mensagem ${mensagem} vinda do nomeEscolhido1`)
    }
    export function funcaoExportada() {
        console.log('Essa função é do namespace nomeEscolhido1 e está exportada.')
    }
}

namespace nomeEscolhido2 {
    function saudacao(mensagem: string) { // É interessante notar que, mesmo que as funções possuam o mesmo nome, seus escopos são diferentes, portanto não é gerado conflito no código.
        console.log(`Essa é a mensagem ${mensagem} vinda do nomeEscolhido2`)
    }
    export function funcaoExportada() { // Mesmo que as funções com mesmo nome possuam, agora, escopo global, seus nomes podem permanecer o mesmo pois elas só poderão ser chamadas se, antes, acessarmos o namespace correto dela.
        console.log('Essa função é do namespace nomeEscolhido2 e está exportada.')
    }
}

nomeEscolhido1.funcaoExportada() // Estou acessando a função do namespace1;
nomeEscolhido2.funcaoExportada()

// Utilizando namespaces aninhados
/*
Também é possível criar namespaces dentro de outro namespace, para isso, basta utilizar a palavra reservada 'namespace' seguido do nome escolhido.

Também é possível fazer a exportação desse namespace interno, basta adicionar a palavra 'export' antes do 'namespace'.
*/

namespace spacePai {
    export namespace spaceFilho {
        export function funcaoDoSpaceFilhoExp() {
            console.log('Função do spaceFilho');
        }
        function funcaoInterna() { // Para que a função possa ser acessa fora do namespace, será necessário sua exportação, do contrário, ela só poderá ser utilizado dentro do namespace spaceFilho.
            console.log('Função que não é exportada')
        }
    }
}
spacePai.spaceFilho.funcaoDoSpaceFilhoExp() // No IntelliSense não aparecerá a 'funcaoInterna', pois ela não é acessível fora do seu escopo.

// Definir um alias de namespace
/*
É possível declarar um apelido para um determinado namespace, basta fazer sua importação e declarar qual o nome escolhido.
*/
import nomeEscolhidoAlias = spacePai.spaceFilho; // Assim será possível acessar diretamente esse space interno.
nomeEscolhidoAlias.funcaoDoSpaceFilhoExp()


// Organizando namespaces de vários arquivos.
/*
É possível separar os namespaces em diversos arquivos, mas é necessário que ocorra a referência de qual se relaciona com qual.

Por exemplo, se houver 4 arquivos diferentes, um sendo o principal do projeto(main.ts) e os outros 3 responsáveis por namespaces, será necessário que o arquivo principal sinalize que os outros 3 devem ser inseridos nele e, também, será necessário sinalizar caso algum desses namespaces está relacionado com o outro.

Para sinalizar isso, será nessário usar a sintaxe '/// <referente path='arquivoNamespace.ts' />

Por exemplo, na página 'main.ts', como ele deve receber os 3 namespaces, será necessário usar:
        /// <reference path='namespace1.ts' />
        /// <reference path='namespace2.ts' />
        /// <reference path='namespace3.ts' />

No caso de um dos namespaces seram relacionados com um outro, no 'filho' será necessário referenciar o 'pai':
        => Caso o namespace2 fosse depender de dados do namespace1, seria necessário fazer:
            /// <reference path='namespace1.ts' />

*/

// CONSIDERAÇÕES SOBRE A IMPLEMENTEÇÃO DOS NAMESPACES
/*
Os namespaces, apesar de possuírem uma interface simples, não são recomendados para muitos casos, pois a separação em módulos acaba sendo mais robusta e segura.
OBS.: NÃO É RECOMENDÁVEL COMBINAR NAMESPACES E MÓDULOS NO MESMO PROJETO.
*/