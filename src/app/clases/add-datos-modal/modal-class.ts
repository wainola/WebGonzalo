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
  ){

  }
}
