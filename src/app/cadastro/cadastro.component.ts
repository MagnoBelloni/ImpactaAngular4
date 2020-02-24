import { Component } from '@angular/core';
import { ICurso } from '../classes/Iinterface.curso';
import { FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './views/cadastro.component.html'
})

export class CadastroComponent {

    //Simulação definindo apenas um curso
    public curso: ICurso = {
        codigo: 10,
        titulo: 'Grazie',
        descricao: 'Silvio Santos Ipsum É namoro ou amizadeemm? É com você Lombardiam. Boca sujuam... sem vergonhuamm. Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam. Ma vale dérreaisam? Mah você mora com o papai ou com a mamãem? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam?',
        ch: 20
    };


 }