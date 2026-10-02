"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Arrow Function");
teste();
teste();
teste();
function teste() {
    console.log("teste...");
}
teste();
teste();
teste();
console.log();
const teste2 = () => {
    console.log("testando...");
};
teste2();
teste2();
teste2();
console.log();
const teste3 = (texto) => {
    const textoResultado = `${texto} testando...`;
    return textoResultado;
};
const resultado1 = teste3("Mychael");
console.log(resultado1);
const resultado2 = teste3("Wolter");
console.log(resultado2);
console.log();
const somar = (num1, num2) => {
    const resultado = num1 + num2;
    return resultado;
};
const resultadoSomar = somar(23, 36);
console.log(`o resultado é ${resultadoSomar}`);
console.log();
const somaArray = (numero) => {
    let total = 0;
    numero.forEach((num) => {
        total += num;
    });
    return total;
};
const numerosAleatorios = [5, 14, 23, 48];
const respostaSoma = somaArray(numerosAleatorios);
console.log(respostaSoma);
//# sourceMappingURL=aula14.js.map