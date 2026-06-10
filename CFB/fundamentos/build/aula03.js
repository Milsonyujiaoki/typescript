"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    nome = "";
    idade = 0;
    email = "";
    telefone = 0;
    constructor(nome, idade, email, telefone) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.telefone = telefone;
    }
}
let User1 = new User("yuji", 25, "teste@teste.com", 1198292832);
console.log(User1);
//# sourceMappingURL=aula03.js.map