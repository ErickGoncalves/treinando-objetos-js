const livro = {
    nome: 'O pode do hábito',
    capitulos: [
        {
            nome: 'O pode do bom hábito'
        },
        {
            nome: 'Seres pensantes'
        },
        {
            nome: 'O mundo atual'
        },
        {
            nome: 'Pessoas criticas'
        },
        {
            nome: 'A democracia moderna'
        },
        {
            nome: 'Legião do bem'
        },
        {
            nome: 'Prática da perfeição'
        },
    ]
};

const { nome, capitulos } = livro;
let numerador = 1;
for (let capitulo of capitulos) {
    capitulo.numero = numerador;
    numerador += 1;
};

console.log(livro);