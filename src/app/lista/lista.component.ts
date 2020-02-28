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

    constructor(private cursosService: CursosService){
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

}