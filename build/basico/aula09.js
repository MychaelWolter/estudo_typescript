"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("ENUM");
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[1]);
const diaHoje = new Date();
console.log(diaHoje);
console.log(diaHoje.getDate());
console.log(diaHoje.getDay());
console.log(dias[diaHoje.getDay()]);
console.log(diaHoje.getFullYear());
console.log();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
console.log();
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 10] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 100] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 1000] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.SUPER);
const tipo1 = tipoUsuario.ADMIN;
console.log(tipo1);
const tipo2 = tipoUsuario.USER;
console.log(tipo2);
//# sourceMappingURL=aula09.js.map