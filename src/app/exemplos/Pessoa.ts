class Pessoa {
    static totalDePessoas: number = 0;

    constructor(protected nome: string, protected idade: number) {
        Pessoa.totalDePessoas += 1;
    }
}

class Aluno extends Pessoa {
    private curso: string;

    constructor(curso: string, nome: string, idade: number) {
        super(nome, idade);
    }

    public setCurso(curso: string): void {
        this.curso = curso;
    }

    public getCurso(): string {
        return this.nome;
    }

}

interface IPonto {
    x: number;
    y: number;

    ehQuadrado(): boolean;
}

class Ponto implements IPonto {
    x: number;
    y: number;
    ehQuadrado(): boolean {
        return this.x == this.y;
    }
}

class Teste {

    public testar(): void {
        let aluno = new Aluno("ADS", "Magno", 19);

        aluno.setCurso("Angular");

        let ponto = new Ponto();
        ponto.x = 30;
        ponto.y = 30;
        alert(ponto.ehQuadrado() ? "É um quadrado" : "Não é um quadrado");
    }

}
