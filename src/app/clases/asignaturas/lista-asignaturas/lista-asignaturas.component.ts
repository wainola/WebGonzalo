import { Component, Input } from '@angular/core';
import { Asignatura } from './asignaturas';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html'
})
export class ListaAsignaturasComponent{
  // creamos la propiedad para que este presta para ser renderizada.
  cursos = CURSOS;
  @Input() elementoSelec: Asignatura;
  elementoSeleccionado(par1){
    this.elementoSelec = par1;
    console.log(this.elementoSelec);
  }
}

// generamos las instancias de los cursos.
const CURSOS: Asignatura[] = [
  new Asignatura("Calculo Vectorial", "Lunes 9:35 AM", "Gonzalo Vera", "Camilo Riquelme", "Nicolas Riquelme"),
  new Asignatura("Cuerpos voladores", "Martes 10:00 AM", "Carpacio Dapadocia", "Mario Jimenez", "Marco Aurelio Cota"),
  new Asignatura("Aerodinamica cuantica IV", "Sabado 16:00 PM", "Alonso Watashiwa", "Felipe Richmond", "Ricardo Baldu"),
  new Asignatura("Vuelo intergalactico", "Domingo 3:00 AM", "Albo Campeon", "Gonzalo Vera", "Chetes Gonzalez", "Techetes Techotos")
]
