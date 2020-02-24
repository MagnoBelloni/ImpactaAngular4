import { Injectable } from '@angular/core';
import { ICurso } from '../classes/Iinterface.curso';

@Injectable()
export class CursosService{
    public getListaCursos(): ICurso[]{
        return [
            { codigo: 1, titulo: "Titulo 1", descricao: "Silvio Santos Ipsum Ma quem quer dinheiroam? O prêmio é em barras de ouro, que vale mais que dinheiroam. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? É com você Lombardiam. Wellintaaammmmmmmmm. Estamos em ritmo de festamm. Ma vai pra lá.", ch: 40 },
            { codigo: 2, titulo: "Titulo 2", descricao: "Silvio Santos Ipsum Mah é a porta da esperançaam. Ma você, topa ou não topamm. Um, dois três, quatro, PIM, entendeuam? Ma vejam só, vejam só. Patríciaaammmm... Luiz Ricardouaaammmmmm. É com você Lombardiam. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae.", ch: 40 },
            { codigo: 3, titulo: "Titulo 3", descricao: "Silvio Santos Ipsum Patríciaaammmm... Luiz Ricardouaaammmmmm. É namoro ou amizadeemm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. É por sua conta e riscoamm? É fácil ou não éam? Ma quem quer dinheiroam? É dinheiro ou não éam?", ch: 40 },
            { codigo: 4, titulo: "Titulo 4", descricao: "Silvio Santos Ipsum O arriscam tuduam, valendo um milhão de reaisuam. É bom ou não éam? Você veio da caravana de ondeammm? Qual é a musicamm? Ma tem ou não tem o celular do milhãouamm? Ma vai pra lá. Ma não existem mulher feiam, existem mulher que não conhece os produtos Jequitiamm.", ch: 40 },
            { codigo: 5, titulo: "Titulo 5", descricao: "Silvio Santos Ipsum Patríciaaammmm... Luiz Ricardouaaammmmmm. É namoro ou amizadeemm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. É por sua conta e riscoamm? É fácil ou não éam? Ma quem quer dinheiroam? É dinheiro ou não éam?", ch: 90 },
        ];
    }
}