import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSort'
})
export class HeroSortPipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {

    switch (sortBy) {

      case 'name':
        return value.sort((a: Hero, b: Hero) => a.name.localeCompare(b.name));

      case 'color':
        return value.sort((a: Hero, b: Hero) => (a.color) - (b.color));

      case 'creator':
        return value.sort((a: Hero, b: Hero) => (a.creator) - (b.creator));

      case 'canFly':
        return value.sort((a: Hero, b: Hero) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));


      default:
        return value;


    }

  }

}
