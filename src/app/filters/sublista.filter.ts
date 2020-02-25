import { Pipe, PipeTransform } from '@angular/core';
import { ICurso } from '../classes/Iinterface.curso';

@Pipe({
    name: 'sublista'
})

export class SublistaFilter implements PipeTransform {

    transform(cursos: ICurso[], input: string) : ICurso[] {
        
        return cursos.filter(curso => curso.titulo.toLowerCase().includes(input.toLowerCase()));
    }

}