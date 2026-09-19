console.log("Union Types");

let teste: any;
teste = "FullStack";

let vteste: string | number | boolean;
vteste = "Mychael";

const testeArray: (string | number | boolean)[] = ["Teste1", 2, false];

const cursos: string[] = ["JavaScript", "TypeScript", "Node.js"];
const valores = [10, 50, 240];

cursos.push("React");
valores.push(570);

console.log(cursos);
console.log(valores);

console.log(teste);
console.log(vteste);

vteste = 100;
console.log(vteste);

vteste = true;
console.log(vteste);

console.log(testeArray);