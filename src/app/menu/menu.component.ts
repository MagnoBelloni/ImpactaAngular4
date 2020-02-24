import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'views/menu.component.html',
    styleUrls: ['./views/menu.component.css']
})

export class MenuComponent{
    titulo_escola: string = "Impacta Treinamentos";
    titulo_lista: string = "Listagem de Cursos";
    titulo_cadastro: string = "Cadastro de Cursos";
    titulo_masterdetail : string = "Master/Detail";
}