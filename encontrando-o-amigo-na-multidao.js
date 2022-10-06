const participantes = [
    { nome: 'João' },
    { nome: 'Julio' },
    { nome: 'Cosmo' },
    { nome: 'Roberto' },
    { nome: 'Ermeson' },
    { nome: 'Ronaldo' },
    { nome: 'Erick' },
    { nome: 'Mateus' },
    { nome: 'Lucas' },
    { nome: 'Othon' }
];

let posicao = 1;

for (let item of participantes) {
    let { nome } = item;
    if (nome == 'Erick') {
        break;
    };
    posicao++;
};

console.log(`Galera ... O Erick está na posição ${posicao}, corre lá!`);