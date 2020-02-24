import { Component } from '@angular/core';
import { ICurso } from '../classes/Iinterface.curso';
import { CursosService } from '../services/cursos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'
})

export class ListaComponent {
    apiLink: string = "https://robohash.org/";
    public listaCursos: ICurso[];

    constructor(cursosService: CursosService){
        this.listaCursos = cursosService.getListaCursos();
    }

}