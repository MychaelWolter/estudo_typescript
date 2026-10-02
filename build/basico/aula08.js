"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("OBJECT");
const dados1 = {
    nome: "Mychael",
    idade: 21,
    status: "Ativo",
    ola: () => {
        console.log("OLá");
    },
    info: (p) => {
        console.log(`Testando ${p}`);
    }
};
console.log(typeof (dados1));
console.log(dados1);
console.log(dados1.nome);
dados1.nome = "Mychael Wolter";
console.log(dados1.nome);
dados1.ola();
dados1.info("123");
dados1.info(dados1.nome);
console.log();
const dados2 = {
    nome: "Mychael",
    idade: 21,
    status: "Ativo",
    ola: () => {
        console.log("OLá");
    },
    info: (p) => {
        console.log(`Testando ${p}`);
    }
};
console.log(typeof (dados2));
console.log(dados2);
console.log();
;
const dados3 = {
    nome: "Mychael",
    idade: 21,
    status: "Ativo",
    ola: () => {
        console.log("OLá");
    },
    info: (p) => {
        console.log(`Testando ${p}`);
    }
};
console.log(typeof (dados3));
console.log(dados3);
console.log(dados3.nome);
dados3.nome = "Mychael Wolter";
console.log(dados3.nome);
dados3.ola();
dados3.info("123");
dados3.info(dados3.nome);
//# sourceMappingURL=aula08.js.map