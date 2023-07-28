const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11155551122330", "11122233355666"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

cliente.emprego = {
    carga_horaria: "8 horas",
    salario: 3000.00,
    funcao: "developer",
    nivel: "pleno",
};

console.log(cliente);
// console.log(cliente["emprego"]);