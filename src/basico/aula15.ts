console.log("REST e SPREAD");

const fSoma = (num1: number, num2: number, num3: number): number => {
    return num1 + num2 + num3;
}

console.log(fSoma(33, 89, 54));

const fSoma2 = (...num: number[]): number => {
    let total: number = 0;
    num.forEach((n: number): void => {
        total += n;
    });

    return total;
}

const resultado = fSoma2(27, 74, 93, 45, 67)
console.log(resultado);

const fMult = (...num: number[]): number => {
    let total: number = 1;
    for(const n of num ) {
        total *= n;
    }

    return total;
}

const resultadoMult = fMult(3, 6, 4, 7);
console.log(resultadoMult);