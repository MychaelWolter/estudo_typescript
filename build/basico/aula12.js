"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Funções");
function teste() {
    console.log("Teste");
}
teste();
console.log();
function logar(user, password) {
    const resultadoLogin = `Usuário: ${user} - Senha: ${password}`;
    console.log("Usuário está logando...");
    console.log(`Usuário: ${user} - Senha: ${password}`);
    return resultadoLogin;
}
const usuarioLogado = logar("mychael", "123456");
console.log(usuarioLogado);
console.log();
const estarLogado = logar("wolter", "654321");
console.log(estarLogado);
console.log();
function somas(n1, n2) {
    const reultadoSoma = n1 + n2;
    return reultadoSoma;
}
const totalSoma = somas(10, 15);
console.log(`O total é ${totalSoma}`);
const stringTotalSoma = somas(20, 35).toString();
console.log(typeof (stringTotalSoma));
console.log(stringTotalSoma);
//# sourceMappingURL=aula12.js.map