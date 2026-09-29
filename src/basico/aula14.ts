console.log("Arrow Function");

teste();
teste();
teste();

function teste(): void {
    console.log("teste...");
}

teste();
teste();
teste();

console.log();

const teste2 = (): void => {
    console.log("testando...");
}

teste2();
teste2();
teste2();

console.log();

const teste3 = (texto: string): string => {
    const textoResultado = `${texto} testando...`;
    return textoResultado;
}

const resultado1 = teste3("Mychael");
console.log(resultado1);

const resultado2 = teste3("Wolter");
console.log(resultado2);

console.log();

const somar = (num1: number, num2: number): number => {
    const resultado = num1 + num2;
    return resultado;
}

const resultadoSomar = somar(23, 36);
console.log(`o resultado é ${resultadoSomar}`);

console.log();

const somaArray = (numero: number[]): number => {
    let total: number = 0;
    numero.forEach((num: number): void => {
        total += num;
    });
    return total;
}

const numerosAleatorios: number[] = [5, 14, 23, 48];
const respostaSoma: number = somaArray(numerosAleatorios);
console.log(respostaSoma);
