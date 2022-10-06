const usuarios = [
    {
        nome: 'Mateus',
        pets: []
    },
    {
        nome: 'Anotnio',
        pets: ['Lulu', 'Shelby']
    },
    {
        nome: 'Luiz',
        pets: ['Arquemenes', "Draus", 'Teco', 'Piolho']
    },
    {
        nome: 'Sebastian',
        pets: ['South']
    },
    {
        nome: 'Daniele',
        pets: ["Croosb", 'Ralf', "Guga"]
    },
    {
        nome: 'Tais',
        pets: []
    },
    {
        nome: 'Jéssica',
        pets: ['Mel']
    },
];

for (let usuario of usuarios) {
    const { nome, pets } = usuario;
    if (pets.length > 1) {
        console.log(`Olá, sou ${nome} e tenho ${pets.length} pets.`);
    } else if (pets.length == 1) {
        console.log(`Olá, sou ${nome} e tenho apenas 1 pet.`);
    } else {
        console.log(`Olá, sou ${nome} e não tenho pets.`);
    }
};