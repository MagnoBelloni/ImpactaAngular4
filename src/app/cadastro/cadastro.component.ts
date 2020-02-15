import { Component } from '@angular/core';
import { ICurso } from '../classes/Iinterface.curso';

@Component({
    template: `
                <div class="container margem">
                    <h1>Cadastro de Cursos</h1>
                    <div class="card">
                        <img class="card-img-top" width="18rem;" [src]="curso.img" alt="imagem">
                        <div class="card-body">        
                            <h3 class="card-title">{{curso.codigo}} - {{curso.titulo}}</h3>
                            <b>Carga Horária: {{curso.ch}}</b>
                            <p class="card-text">{{curso.descricao}}</p>
                            <a href="#" class="btn btn-primary">Pulsante</a>
                        </div>
                    </div>
                </div>
              `

})

export class CadastroComponent {

    //Simulação definindo apenas um curso
    public curso: ICurso = {
        codigo: 10,
        titulo: 'Grazie',
        descricao: 'Silvio Santos Ipsum É namoro ou amizadeemm? É com você Lombardiam. Boca sujuam... sem vergonhuamm. Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam. Ma vale dérreaisam? Mah você mora com o papai ou com a mamãem? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam?',
        ch: 20,
        img: 'https://www.brasilnaitalia.net/wp-content/uploads/2016/10/obrigado-em-italiano-grazie.jpg'
    };


 }