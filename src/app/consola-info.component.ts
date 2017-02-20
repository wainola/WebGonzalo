import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { DatosFormularioComponent } from './datos-formulario.component';
import { FormularioData } from './formulario-data';

@Component({
  selector: 'app-consola-info',
  templateUrl: './consola-info.component.html',
  styles: []
})
export class ConsolaInfoComponent extends DatosFormularioComponent{
  datosCarga:FormularioData[] = JSON.parse(localStorage.getItem('datos'));

  /*ngOnInit(){
    console.log("ngInit");
  }
  ngDoCheck(){
    console.log("DoCheck");
  }
  ngOnChanges(){
    console.log("OnChanges")
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }
  ngAfterViewInit(){
    console.log("AfterViewInit")
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }
  ngAfterContentInit(){
    console.log("AfterContentInit")
  }
  ngOnDestroy(){
    console.log("OnDestroy")
  }*/
}
