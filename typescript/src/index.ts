enum ValorAtribuido {
    Aprovado = 1,
    Reprovado,
    Recuperacao
}

const aluno1: ValorAtribuido = ValorAtribuido.Reprovado;

console.log(ValorAtribuido[aluno1]);
