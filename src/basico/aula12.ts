console.log("Funções");

function teste(): void {
    console.log("Teste");
}

teste();
console.log();

function logar(user: string, password: string): string{
    const resultadoLogin: string = `Usuário: ${user} - Senha: ${password}`;

    console.log("Usuário está logando...");
    console.log(`Usuário: ${user} - Senha: ${password}`);

    return resultadoLogin;
}

const usuarioLogado: string = logar("mychael", "123456");
console.log(usuarioLogado);
console.log();

const estarLogado: string = logar("wolter", "654321");
console.log(estarLogado);

console.log();

function somas(n1: number, n2: number): number {
    const reultadoSoma: number = n1 + n2;
    return reultadoSoma;
}

const totalSoma: number = somas(10, 15);
console.log(`O total é ${totalSoma}`);

const stringTotalSoma: string = somas(20, 35).toString();
console.log(typeof(stringTotalSoma));
console.log(stringTotalSoma);
