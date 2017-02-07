import { Component, OnInit } from '@angular/core';
import { Asignaturas } from './asignaturas';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html',
  styles: []
})
export class ListaAsignaturasComponent implements OnInit {
  //declaramos atributo del tipo curso para hacer el arreglo de cursos.
  cursos: Asignaturas[] = [];
  curso = new Asignaturas("Ramo 1");

  constructor() {}

  ngOnInit() {
  }

}
