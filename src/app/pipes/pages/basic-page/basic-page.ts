import {Component, effect, inject, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {availableLocale, LocaleService} from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css'
})
export default class BasicPage {

  localService = inject(LocaleService);

  nameLower = signal('roberto');
  nameUpper = signal('ROBERTO');
  fullName = signal('RobErtO JoaO');
  customDate = signal(new Date())
  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval)
    });
  })

  changeLocal (locale: availableLocale){
    this.localService.changeLocale(locale);
  }

}
