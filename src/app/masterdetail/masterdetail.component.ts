import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ICurso } from '../classes/Iinterface.curso';

@Component({
    moduleId: module.id,
    templateUrl: './views/masterdetail.component.html'
})

export class MasterDetailComponent {


    public listaCursos: ICurso[];
    public cursoSelecionado: ICurso;
    private novoCurso: ICurso;

    constructor(private cursosService: CursosService) {
        this.listar();
    }

    public listar(): void {
        this.cursosService.getCursos()
            .subscribe(res => {
                this.listaCursos = res;
                console.log(this.listaCursos);
            },
                error => alert(error),
                () => console.log('finalizado'));
    }

    //para a inclusão de um novo curso
    public novo(): void {
        this.novoCurso = { codigo: 0, descricao: '', ch: 0 }
        this.cursoSelecionado = this.novoCurso;
    }

    public incluir(curso: ICurso): void {
        curso.descricao = curso.descricao[0].toUpperCase() + curso.descricao.substring(1).toLowerCase();
        this.cursosService.setCurso(curso)
            .subscribe(res => {
                JSON.stringify(res);
                alert('Curso incluído com sucesso');
            },
                error => alert(error),
                () =>  this.listar()
            );

        
    }

    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item;
    }


}