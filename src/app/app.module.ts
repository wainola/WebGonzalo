import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterfazClasesComponent } from './interfaz-clases.component';
import { FormularioMasterComponent } from './formulario-master.component';
import { CursoFormComponent } from './curso-form.component';
import { DatosFormularioComponent } from './datos-formulario.component';
import { ConsolaInfoComponent } from './consola-info.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfazClasesComponent,
    FormularioMasterComponent,
    CursoFormComponent,
    DatosFormularioComponent,
    ConsolaInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
