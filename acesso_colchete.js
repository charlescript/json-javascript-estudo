const cliente = {
    nome: "Andre",
    idade: 32,
    altura: 1.78,
    cpf: "112233445566",
    email: "andre@dominio.com",
};

console.log(
    `O nome do cliente é ${cliente["nome"]} e possui ${cliente["idade"]} anos.
`);

console.log(
    `Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3) }
`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave "${chave}" tem valor ${cliente[chave]}`)
})