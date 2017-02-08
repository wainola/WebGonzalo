// implementacion de interfaz de asignaturas para determinar atributos.
interface Asignaturas{
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra?: string;
  impresionInfo();
}

export class Asignatura implements Asignaturas{
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra?: string;
  constructor(curso, horario, instructor, partner, observadores, infoExtra?){
    if(infoExtra === undefined){
      this.curso = curso;
      this.horario = horario;
      this.instructor = instructor;
      this.partner = partner;
      this.observadores = observadores;
      this.infoExtra = "No se ha añadido.";
    } else {
      this.curso = curso;
      this.horario = horario;
      this.instructor = instructor;
      this.partner = partner;
      this.observadores = observadores;
      this.infoExtra = infoExtra;
    }
  }
  impresionInfo(){
    console.log(`
    Curso: ${this.curso}.
    Horario: ${this.horario}.
    Instructor: ${this.instructor}.
    Observadores: ${this.observadores}.
    Informacion Extra: ${this.infoExtra}
    `)
  }
}