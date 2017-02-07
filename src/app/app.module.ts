import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderSiteComponent } from './header-site.component';
import { ClasesComponent } from './clases/clases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
