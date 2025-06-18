import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, flipFlop: boolean = true): string {

    return flipFlop ? value.toUpperCase(): value.toLowerCase();

  }

}
