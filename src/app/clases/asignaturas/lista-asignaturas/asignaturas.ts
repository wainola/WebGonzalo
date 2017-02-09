import { Input } from '@angular/core';
// implementacion de interfaz de asignaturas para determinar atributos.
interface Asignaturas{
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra?: string;
  chequeado: boolean;
  impresionInfo();
  chequeoBox(ar1:boolean);
}

export class Asignatura implements Asignaturas{
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra?: string;
  chequeado: boolean;
  constructor(curso, horario, instructor, partner, observadores, infoExtra?, chequeado:boolean = false){
    if(infoExtra === undefined){
      this.curso = curso;
      this.horario = horario;
      this.instructor = instructor;
      this.partner = partner;
      this.observadores = observadores;
      this.infoExtra = "-";
      this.chequeado = chequeado;
    } else {
      this.curso = curso;
      this.horario = horario;
      this.instructor = instructor;
      this.partner = partner;
      this.observadores = observadores;
      this.infoExtra = infoExtra;
      this.chequeado = chequeado;
    }
  }

  impresionInfo(){
    console.log(`
    Curso: ${this.curso}.
    Horario: ${this.horario}.
    Instructor: ${this.instructor}.
    Observadores: ${this.observadores}.
    Informacion Extra: ${this.infoExtra}
    `);
  }

  chequeoBox(ar1:boolean){
    this.chequeado = ar1;
  }
  getChequeo(){
    console.log(this.chequeado);
  }
  aplicacionClase(){
    if(this.chequeado){
      let clase = "table-success";
      return clase;
    }else{
      let clase = "table-danger";
      return clase;
    }
  }
}
