console.log("TUPLAS");

const coisas1: (number | string)[] = [10, 20, 30, "Teste"];
console.log(coisas1);

const coisas2: [string, number, boolean] = ["corda", 10, false];
console.log(coisas2);
console.log(coisas2[0]);
console.log(coisas2[1]);
console.log(coisas2[2]);

coisas2[2] = true;
console.log(coisas2);

coisas2.push("bola", 7, false);
console.log(coisas2);

const coisas3: readonly [number, boolean] = [20, true];
console.log(coisas3);
