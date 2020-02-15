import {Component} from '@angular/core';
import { ICurso } from '../classes/Iinterface.curso';
import { moduleProvideDef } from '@angular/core/src/view';

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'
    // template: `
    //             <div class="container margem">
    //                 <h1>Listagem de Cursos</h1>
    //             </div>
    //           `
})

export class ListaComponent{
    
    //Definindo um array de cursos
    public listaCursos: ICurso[] = [
        {codigo: 1, titulo : "Titulo 1", descricao:"Silvio Santos Ipsum Ma quem quer dinheiroam? O prêmio é em barras de ouro, que vale mais que dinheiroam. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? É com você Lombardiam. Wellintaaammmmmmmmm. Estamos em ritmo de festamm. Ma vai pra lá.", ch:40, img:'https://robohash.org/'},
        {codigo: 2, titulo : "Titulo 2", descricao:"Silvio Santos Ipsum Mah é a porta da esperançaam. Ma você, topa ou não topamm. Um, dois três, quatro, PIM, entendeuam? Ma vejam só, vejam só. Patríciaaammmm... Luiz Ricardouaaammmmmm. É com você Lombardiam. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae.", ch:40, img:'https://robohash.org/'},
        {codigo: 3, titulo : "Titulo 3", descricao:"Silvio Santos Ipsum Patríciaaammmm... Luiz Ricardouaaammmmmm. É namoro ou amizadeemm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. É por sua conta e riscoamm? É fácil ou não éam? Ma quem quer dinheiroam? É dinheiro ou não éam?", ch:40, img:'https://robohash.org/'},
        {codigo: 4, titulo : "Titulo 4", descricao:"Silvio Santos Ipsum O arriscam tuduam, valendo um milhão de reaisuam. É bom ou não éam? Você veio da caravana de ondeammm? Qual é a musicamm? Ma tem ou não tem o celular do milhãouamm? Ma vai pra lá. Ma não existem mulher feiam, existem mulher que não conhece os produtos Jequitiamm.", ch:80, img:'https://robohash.org/'},
        {codigo: 5, titulo : "Titulo 5", descricao:"Silvio Santos Ipsum Patríciaaammmm... Luiz Ricardouaaammmmmm. É namoro ou amizadeemm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. É por sua conta e riscoamm? É fácil ou não éam? Ma quem quer dinheiroam? É dinheiro ou não éam?", ch:90, img:'https://robohash.org/'},
    ];

    public curso: ICurso = {
        codigo: 10,
        titulo: 'Grazie',
        descricao: 'Silvio Santos Ipsum É namoro ou amizadeemm? É com você Lombardiam. Boca sujuam... sem vergonhuamm. Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam. Ma vale dérreaisam? Mah você mora com o papai ou com a mamãem? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam?',
        ch: 20,
        img: 'https://www.brasilnaitalia.net/wp-content/uploads/2016/10/obrigado-em-italiano-grazie.jpg'
    };
    
}