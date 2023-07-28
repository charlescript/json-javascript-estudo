const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11155551122330", "11122233355666"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",  
    },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto); 

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado!");
} 