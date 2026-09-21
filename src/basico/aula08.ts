console.log("OBJECT");

const dados1 = {
    nome: "Mychael",
    idade: 21,
    status: "Ativo",
    ola: () => {
        console.log("OLá");
    },
    info: (p: string) => {
        console.log(`Testando ${p}`);
    }
};

console.log(typeof(dados1));
console.log(dados1);
console.log(dados1.nome);

dados1.nome = "Mychael Wolter";
console.log(dados1.nome);

dados1.ola();
dados1.info("123");
dados1.info(dados1.nome);

console.log();

const dados2: object = {
    nome: "Mychael",
    idade: 21,
    status: "Ativo",
    ola: () => {
        console.log("OLá");
    },
    info: (p: string) => {
        console.log(`Testando ${p}`);
    }
}

console.log(typeof(dados2));
console.log(dados2);
console.log(dados2.nome);

dados2.nome = "Mychael Wolter";
console.log(dados2.nome);

dados2.ola();
dados2.info("123");
dados2.info(dados2.nome);

console.log();

interface Dados {
    nome: string;
    idade: number;
    status: string;
    ola: () => void;
    info: (p: string) => void;
};

const dados3: Dados = {
    nome: "Mychael",
    idade: 21,
    status: "Ativo",
    ola: () => {
        console.log("OLá");
    },
    info: (p: string) => {
        console.log(`Testando ${p}`);
    }
};

console.log(typeof(dados3));
console.log(dados3);
console.log(dados3.nome);

dados3.nome = "Mychael Wolter";
console.log(dados3.nome);

dados3.ola();
dados3.info("123");
dados3.info(dados3.nome);
