import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-master',
  templateUrl: './formulario-master.component.html',
  styles: []
})
export class FormularioMasterComponent{
  escondido:boolean = false;
  muestraFormulario(){
    if(this.escondido || !this.escondido){
      this.escondido = !this.escondido;
    }
  }
}
