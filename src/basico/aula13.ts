console.log("Parametros padrões e opcionais");

function soma1(n1: number, n2: number): number {
    const resultadoSoma = n1 + n2;
    return resultadoSoma;
}

const reultado1 = soma1(5, 47);
console.log(reultado1);

console.log();

function soma2(n1: number = 0, n2: number = 0): number {
    const resultadoSoma = n1 + n2;
    return resultadoSoma;
}

const resultado2 = soma2(10);
console.log(resultado2);

console.log();

function novoUser(user: string, passwd: string, nome?: string): void {
    const dados: object = {user, passwd, nome};
    console.log(dados);
}

novoUser("Lucio", "963741");
