import {Pipe, PipeTransform} from '@angular/core';
import {Color} from '../interfaces/hero.interface';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color, ...args: unknown[]): string {
    return Color[value].toString();
  }

}
