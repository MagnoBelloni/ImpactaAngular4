import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ICurso } from '../classes/Iinterface.curso';

@Component({
    moduleId: module.id,
    templateUrl: './views/masterdetail.component.html'
})

export class MasterDetailComponent{


    public listaCursos: ICurso[];
    public cursoSelecionado: ICurso;
    private novoCurso: ICurso;

    constructor(cursosService: CursosService){
        this.listaCursos = cursosService.getListaCursos();
    }
    
    //para a inclusão de um novo curso
    public novo(): void{
        this.novoCurso = {codigo: 0, titulo: '', descricao: '', ch: 0}
        this.cursoSelecionado = this.novoCurso;
    }

    public incluir(curso: ICurso) : void{
        this.listaCursos.push(curso);
        alert('Curso incluído com sucesso');
    }

    public selecionar(item: ICurso): void{
        this.cursoSelecionado = item;
    }

    
}