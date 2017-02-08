import { Component  } from '@angular/core';
import { Asignatura } from './asignaturas';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html'
})
export class ListaAsignaturasComponent{
  // creamos la propiedad para que este presta para ser renderizada.
  cursos = CURSOS;
}

// generamos las instancias de los cursos.
const CURSOS: Asignatura[] = [
  new Asignatura("Calculo Vectorial", "lunes a viernes", "Gonzalo Vera", "Camilo Riquelme", "Nicolas Riquelme"),
  new Asignatura("Cuerpos voladores", "Lunes a viernes", "Carpacio Dapadocia", "Mario Jimenez", "Marco Aurelio Cota")
]




