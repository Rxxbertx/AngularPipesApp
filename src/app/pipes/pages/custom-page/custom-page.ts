import {Component, signal} from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case-pipe';
import {heroes} from '../../data/hero.data';
import {FlyPipe,} from '../../pipes/fly-pipe-pipe';
import {ColorPipe } from '../../pipes/color-pipe-pipe';
import {ColorMap, Hero} from '../../interfaces/hero.interface';
import {ColorTextPipe} from '../../pipes/color-text-pipe-pipe';
import {TitleCasePipe} from '@angular/common';
import {HeroCreatorPipe} from '../../pipes/hero-creator-pipe';
import {FilterPipe} from '../../pipes/filter-pipe';
import {HeroSortPipe} from '../../pipes/hero-sort-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    FlyPipe,
    ColorPipe,
    ColorTextPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    FilterPipe,
    HeroSortPipe

  ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css'
})
export default class CustomPage {

  name = signal('Roberto Joao')
  valueOfToggle = signal<boolean | undefined>(false);

  togglePipe() {

    this.valueOfToggle.set(!this.valueOfToggle())

  }

  //heroes

  heroes = signal(heroes)



  //sort


  sortBy = signal<keyof Hero | null>(null);

  searchQuery= signal('')





}
