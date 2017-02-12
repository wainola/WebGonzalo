import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderSiteComponent } from './header-site.component';
import { ClasesComponent } from './clases/clases.component';
import { AsignaturasComponent } from './clases/asignaturas/asignaturas.component';
import { ListaAsignaturasComponent } from './clases/asignaturas/lista-asignaturas/lista-asignaturas.component';
import { EjemploDirectivasComponent } from './ejemplo-directivas/ejemplo-directivas.component';
import { EjemploDirectivaDirective } from './ejemplo-directivas/ejemplo-directiva.directive';
import { AddDatosModalComponent } from './clases/add-datos-modal/add-datos-modal.component';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    ClasesComponent,
    AsignaturasComponent,
    ListaAsignaturasComponent,
    EjemploDirectivasComponent,
    EjemploDirectivaDirective,
    AddDatosModalComponent,
    DatosAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
