const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "112233445566",
    email: "andre@dominio.com",
};

console.log(cliente.nome);
console.log(cliente.idade);
console.log(`O nome do cliente é ${cliente.nome} e possui ${cliente.idade} anos.`);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3) }`);