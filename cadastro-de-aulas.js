const curso = {
    id: 1234,
    nome: "Lógica de Progamação",
    aulas: [
        // {
        //     id: 01,
        //     nome: "Introdução a Programação"
        // },
        // {
        //     id: 02,
        //     nome: "Variáveis"
        // },
        // {
        //     id: 03,
        //     nome: "Condicionais"
        // },
        // {
        //     id: 04,
        //     nome: "Loops"
        // },
    ]
};



let { aulas } = curso;
aulas.push({
    id: 01,
    nome: "Introdução a Programação"
},
    {
        id: 02,
        nome: "Variáveis"
    },
    {
        id: 03,
        nome: "Condicionais"
    },
    {
        id: 04,
        nome: "Loops"
    },);


console.log(curso);