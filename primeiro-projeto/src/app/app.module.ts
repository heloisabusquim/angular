import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
