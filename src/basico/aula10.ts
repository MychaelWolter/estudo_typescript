console.log("Null, Undefined e Unknown");

let nome1: string | null;
console.log(nome1);

nome1 = null;
console.log(nome1);

nome1 = "Mychael";
console.log(nome1);

console.log();

let nome2: any;
console.log(nome2);

nome2 = null;
console.log(nome2);

nome2 = "Lucio";
console.log(nome2);

console.log();

let nome3: unknown = nome1;
let nomeNum: any = nome3;
console.log(nome3);
console.log(nomeNum);


