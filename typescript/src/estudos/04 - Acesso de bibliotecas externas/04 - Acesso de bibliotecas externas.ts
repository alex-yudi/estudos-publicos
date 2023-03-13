// Organizando código com módulos.
/*
Os módulos permitem a organização do código em arquivos diferentes, porém é necessário utilizar a exportação e importação deles entre esses arquivos.

Para isso é necessário utilizar a palabra reservada 'export' e a 'import'.
    => Há depender da versão do JS utilizado na escrita, ocorre algumas diferentas entre a forma que essas exportações e importações ocorrem
            -> Há variações de module.exports / export; require() / import

Essa separação por arquivos é chamado modularização.
*/

// Exportar e importar componentes de módulo
/*
No Typescript será utilizado a exportação e importação mais recente, utilizado no ES6, na qual utiliza-se as palavras reservadas 'export' e 'import';
*/
// Exportar um componente
export function returnGreeting(greeting: string) { // Para informar qual função deve ser exportada, basta adicionar a palavra reservada 'export' antes de sua declaração.
    // OBS.: A função/elemento que não possuir essa palavra permanecerá em escopo local.
    console.log(`The message from Greetings_module is ${greeting}.`);
}

// Importar um componente
import { exemploExportacao } from './localizacaoArquivoDestinoDeImportacao' // Nesse caso está sendo utilizado descontrução de objeto, para pegar especificamente a função desejada.
// Importar o módulo completo

// Caso eu queira fazer a importação e adicionar um 'apelido' para esse elemento importado, utilizo o alias 'as' após o nome 'original' desse elemento;
import { exemploExportacao as novoNomeEscolhido } from './localizacaoArquivoDestinoDeImportacao';

// Caso eu queira importar todo o módulo, é necessário informar uma nomenclatura para essa importação, para que esse módulos possa ser utilizado no arquivo. Ele será considerado um objeto, havendo necessidade de manipulá-lo e utilizá-lo como um.
import * as moduloExemplo from './localizacaoArquivoDestinoDeImportacao';

// Acessar bibliotecas externas
/*
Ao utilizar bibliotecas externas nos projetos Typescript, será necessário fazer a instalação das definições de tipos, pois, do contrário, o próprio Typescript irá gerar erros de tipagem e o IntelliSense não funcionará corretamente.

Para fazer essa instalação, SEMPRE será necessário utilizar o --save-dev, pois não desejamos que essa tipagem faça parte do projeto em produção.
    O comando no terminal será:
        npm install --save-dev @types/nome-da-biblioteca
    No próprio site do npm é informado se a biblioteca desejada possui suporte para o Typescript e como ele deve ser instalado no projeto.

Após todas as etapas de instalação serem concluídas, será necessário fazer a importação da biblitoca nos arquivos em que eles serão necessário. Para isso, devemos utilizar a palavra 'import biblioteca/variávelParaEla from 'biblioteca'
    Obs.: No JS normalmente seria utilizado o 'const nome = require('biblioteca')', mas como o Typescript usa como base o ES6, a importação ocorre de maneira diferente. 
*/