"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("REST e SPREAD");
const fSoma = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
console.log(fSoma(33, 89, 54));
const fSoma2 = (...num) => {
    let total = 0;
    num.forEach((n) => {
        total += n;
    });
    return total;
};
const resultado = fSoma2(27, 74, 93, 45, 67);
console.log(resultado);
const fMult = (...num) => {
    let total = 1;
    for (const n of num) {
        total *= n;
    }
    return total;
};
const resultadoMult = fMult(3, 6, 4, 7);
console.log(resultadoMult);
//# sourceMappingURL=aula15.js.map