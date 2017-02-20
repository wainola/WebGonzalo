export class FormularioData {
    curso:string;
    horario:string;
    instructor:string;
    partner:string;
    observadores:string;
    infoExtra?:string;

    constructor(curso:string, horario:string, instructor:string, partner:string, observadores:string, infoExtra?:string){
        this.curso = curso;
        this.horario = horario;
        this.instructor = instructor;
        this.partner = partner;
        this.observadores = observadores;
        this.infoExtra = infoExtra || "-";
    }
}
