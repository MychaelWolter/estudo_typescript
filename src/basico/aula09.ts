console.log("ENUM");

enum dias {
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}

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

enum cores {
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco);
console.log(cores['branco']);
console.log(cores['#fff']);

console.log();

enum tipoUsuario {
    USER = 10,
    ADMIN = 100,
    SUPER = 1000
}

console.log(tipoUsuario.SUPER);

const tipo1: tipoUsuario = tipoUsuario.ADMIN;
console.log(tipo1);

const tipo2: tipoUsuario = tipoUsuario.USER;
console.log(tipo2);
