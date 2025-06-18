import {Injectable, signal} from '@angular/core';


export type availableLocale = 'es' | 'en' | 'ro'


@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<availableLocale>('en')

  constructor() {
    this.currentLocale.set(
      localStorage.getItem('local') as availableLocale ?? 'en'
    )
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: availableLocale) {

    this.currentLocale.set(locale);
    localStorage.setItem('local', locale);
    window.location.reload()

  }


}
