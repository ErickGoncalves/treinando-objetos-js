const usuarios = [
    {
        nome: 'Junior',
        idade: 21
    },
    {
        nome: 'Tiago',
        idade: 15
    },
    {
        nome: 'Paulo',
        idade: 12
    },
    {
        nome: 'Ronaldo',
        idade: 32
    },
    {
        nome: 'Antonio',
        idade: 5
    },
    {
        nome: 'Gluaberto',
        idade: 18
    },
    {
        nome: 'Bruno',
        idade: 17
    },

];


const jovens = [];
const adultos = [];


for (let usuario of usuarios) {
    let { idade } = usuario;
    if (idade < 18) {
        jovens.push(usuario);
    } else {
        adultos.push(usuario);
    }
}

console.log(jovens, adultos);



