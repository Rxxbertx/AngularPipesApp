import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {registerLocaleData} from '@angular/common';

import localEs from '@angular/common/locales/es'
import localRo from '@angular/common/locales/ro'
import {LocaleService} from './pipes/services/locale.service';

registerLocaleData(
  localEs, 'es'
)
registerLocaleData(
  localRo, 'ro'
)

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getLocale
    }
  ]
};
