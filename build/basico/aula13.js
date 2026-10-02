"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Parametros padrões e opcionais");
function soma1(n1, n2) {
    const resultadoSoma = n1 + n2;
    return resultadoSoma;
}
const reultado1 = soma1(5, 47);
console.log(reultado1);
console.log();
function soma2(n1 = 0, n2 = 0) {
    const resultadoSoma = n1 + n2;
    return resultadoSoma;
}
const resultado2 = soma2(10);
console.log(resultado2);
console.log();
function novoUser(user, passwd, nome) {
    const dados = { user, passwd, nome };
    console.log(dados);
}
novoUser("Lucio", "963741");
//# sourceMappingURL=aula13.js.map