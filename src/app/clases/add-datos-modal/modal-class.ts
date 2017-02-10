import { ModalInterface } from './modal-interface';

export class ModalClass implements  ModalInterface {
  id: number;
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra?: string;
  constructor(
    id: number,
    curso: string,
    horario: string,
    instructor: string,
    partner: string,
    observadores: string,
    infoExtra?: string,
  ){
    if(infoExtra === undefined){
      this.id = id;
      this.curso = curso;
      this.horario = horario;
      this. partner = partner;
      this.observadores = observadores;
      this.infoExtra = "-";
      this.infoModal();
    }else{
      this.id = id;
      this.curso = curso;
      this.horario = horario;
      this. partner = partner;
      this.observadores = observadores;
      this.infoExtra = infoExtra;
      this.infoModal();
    }
  }
  infoModal(){
    console.log(`
      ${this.id}.
      ${this.curso}.
      ${this.horario}.
      ${this.partner}.
      ${this.observadores}.
      ${this.infoExtra}.
      `);
  }
}
