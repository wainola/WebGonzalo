import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { FormularioData } from './formulario-data';

@Component({
  selector: 'app-datos-formulario',
  templateUrl: './datos-formulario.component.html',
  styles: []
})
export class DatosFormularioComponent{
  //usando FormBuilder.
  formulario:FormGroup;
  // Guardamos los datos ingresados en un arreglo del tipo FormularioData.
  arregloDatos:FormularioData[] = [];
  constructor(public fb:FormBuilder){
    this.formulario = fb.group({
      curso: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      horario: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      instructor: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      partner: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      observadores: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      informacionExtra: [null]
    });
  }
  addDatos(){
    console.log(`
    Curso: ${this.formulario.value.curso}.
    Horario: ${this.formulario.value.horario}.
    Instructor: ${this.formulario.value.instructor}.
    Partner: ${this.formulario.value.partner}.
    Observadores: ${this.formulario.value.observadores}.
    Informacion Extra: ${this.formulario.value.informacionExtra}.
    `)
    this.arregloDatos.push(new FormularioData(
      this.formulario.value.curso,
      this.formulario.value.horario,
      this.formulario.value.instructor,
      this.formulario.value.partner,
      this.formulario.value.observadores,
      this.formulario.value.informacionExtra
    ));
    this.formulario.reset();
    localStorage.setItem('datos', JSON.stringify(this.arregloDatos));
  }
  mostrarData(){
    let data:FormularioData[];
    data = JSON.parse(localStorage.getItem('datos'));
    for(let i in data){
      console.log(data[i]);
    }
  }
}
// Por hacer: resolver el tema de la actualizacion del localStorage.