const usuarios = [
    {
        nome: 'João',
        idade: 25
    },
    {
        nome: 'Paulo',
        idade: 12
    },
    {
        nome: 'Lucas',
        idade: 17
    },
    {
        nome: 'Pedro',
        idade: 45
    },
    {
        nome: 'Carlos',
        idade: 29
    }
];

for (let usuario of usuarios) {
    let { idade } = usuario;
    if (idade > 17) {
        usuario.maior_idade = true;
    } else {
        usuario.maior_idade = false;
    };
};



console.log(usuarios);