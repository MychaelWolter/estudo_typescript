const numeros1: number[] = [20, 40, 60];
console.log(numeros1);

const numeros2: Array <number | string> = [10, 30, 50, "Mychael"];

const numeros3: (number | string)[] = [5, 10, 15, "Lucio"];

numeros1.push(80);
console.log(numeros1);

numeros1.unshift(10);
console.log(numeros1);

numeros1.pop();
numeros1.shift();
console.log(numeros1);

console.log(numeros2);
console.log(numeros3);

const numeros4: ReadonlyArray <number> = [100, 200, 300, 400];
console.log(numeros4);

const numeros5: readonly number[] = [150, 250, 350, 450];
console.log(numeros5);
