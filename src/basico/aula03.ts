class Curso {
    canal: string;
    curso: string;

    constructor(canal: string, curso: string) {
        this.canal = canal;
        this.curso = curso;
    }
}

const c1 = new Curso("TypeScript", "TypeScript Fundamentals");

console.log(c1.canal);
console.log(c1.curso);