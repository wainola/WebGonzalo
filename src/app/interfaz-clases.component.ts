import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfaz-clases',
  templateUrl: './interfaz-clases.component.html',
  styles: []
})
export class InterfazClasesComponent {
  // se añade metodo para mostrar la tarjeta de llenado de datos.
  arregloCursos: Asignaturas[] = [];
  title: string = "Horarios";
  newCurso: HTMLInputElement;
  newHorario: HTMLInputElement;
  newInstructor: HTMLInputElement;
  newPartner: HTMLInputElement;
  newObservadores: HTMLInputElement;
  newInfoExtra?: HTMLInputElement;
  mostrarCard(card: HTMLElement){
    if(card.hidden || !card.hidden){
      card.hidden = !card.hidden;
    }
  }
  addDatos(newCurso, newHorario, newInstructor, newPartner, newObservadores, newInfoExtra){
    //añadimos al arreglo de asignaturas para desplegarlas en el cliente.
    this.arregloCursos.push(new Asignaturas(newCurso.value, newHorario.value, newInstructor.value, newPartner.value, newObservadores.value, newInfoExtra.value));
    // impresion de los valores actuales ingresados.
    console.log(`
    Curso: ${newCurso.value}.
    Horario: ${newHorario.value}.
    Instructor: ${newInstructor.value}.
    Partner: ${newPartner.value}.
    Observadores: ${newObservadores.value}.
    Informacion extra: ${newInfoExtra.value}.
    `);
    // limpieza de los campos.
    newCurso.value = "";
    newHorario.value = "";
    newInstructor.value = "";
    newPartner.value = "";
    newObservadores.value = "";
    newInfoExtra.value = "";
    //cercioramos que estamos guardando en el arreglo.
    console.log(this.arregloCursos.length);
  }

}

// delcaramos una clase donde guardar los datos.
class Asignaturas{
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra: string;

  constructor(curso: string, horario: string, instructor: string, partner: string, observadores: string, infoExtra?:string){
    this.curso = curso;
    this.horario = horario;
    this.instructor = instructor;
    this.partner = partner;
    this.observadores = observadores;
    this.infoExtra = infoExtra || "";
  }
}
