import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitlizadoPipe } from './pipes/capitlizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CotrasenaPipe } from './pipes/cotrasena.pipe';

@NgModule({
  declarations: [AppComponent, CapitlizadoPipe, DomseguroPipe, CotrasenaPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
