// Generamos la interface para luego implementarla en nuestra clase.
export interface ModalInterface {
  id: number;
  curso: string;
  horario: string;
  instructor: string;
  partner: string;
  observadores: string;
  infoExtra?: string;
}
