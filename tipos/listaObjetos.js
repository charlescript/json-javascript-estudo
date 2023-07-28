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

cliente.enderecos.push({
        rua: "R. Rangel Almeida",
        numero: 1321,
        apartamento: false,
        complemento: "casa 12",  
});


const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(cliente.endereco);
console.log(listaApenasApartamentos);