import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from '../interfaces/hero.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Hero[], searchQuery: string): Hero[] {
    if (!searchQuery) {

      return value

    }

    searchQuery = searchQuery.toLowerCase();

    return value.filter(hero => hero.name.toLowerCase().includes(searchQuery.toLowerCase()))


  }

}
