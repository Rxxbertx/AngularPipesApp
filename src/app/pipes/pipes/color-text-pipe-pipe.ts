import {Pipe, PipeTransform} from '@angular/core';
import {Color, ColorMap} from '../interfaces/hero.interface';

@Pipe({
  name: 'colorTextPipe'
})
export class ColorTextPipe implements PipeTransform {

  transform(value: Color, ...args: unknown[]): string {


    return ColorMap[value];


  }

}
