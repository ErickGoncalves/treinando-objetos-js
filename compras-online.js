const itens = {
    nome: "Tv Sansumg",
    valorEmCentavos: 120000
};



const isabel = { nome: "Isabel", carrinho: [] };
const joao = { nome: "Joao", carrinho: [] };
const saulo = { nome: "Saulo", carrinho: [] };
const paulo = { nome: "Paulo", carrinho: [] };
const cris = { nome: "Cris", carrinho: [] };


const tv = { nome: "Tv Sansumg", valorEmCentavos: 120000 };
const notebook = { nome: "Acer Aspire 3", valorEmCentavos: 100000 };
const celular = { nome: "Iphone 5s", valorEmCentavos: 80000 };
const mouse = { nome: "Mouse Blue", valorEmCentavos: 4000 };
const teclado = { nome: "Teclado Poenix", valorEmCentavos: 3000 };
const monitor = { nome: "Tela 14 polegadas", valorEmCentavos: 10000 };


joao.carrinho = [
    {
        item: tv,
        quantidade: 1
    },
    {
        item: celular,
        quantidade: 1
    },
];
paulo.carrinho = [
    {
        item: monitor,
        quantidade: 1
    },
    {
        item: mouse,
        quantidade: 1
    },
    {
        item: teclado,
        quantidade: 1
    },
];
saulo.carrinho = [
    {
        item: notebook,
        quantidade: 1
    },

];
isabel.carrinho = [
    {
        item: celular,
        quantidade: 1
    },

];
// outra forma de adicionar ...

cris.carrinho.push(
    {
        item: notebook,
        quantidade: 2
    },
    {
        item: celular,
        quantidade: 1
    },
);

console.log(isabel);
console.log(paulo);
console.log(saulo);
console.log(joao);
console.log(cris);