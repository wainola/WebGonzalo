import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// importamos la clase modal creada.
import { ModalClass } from './modal-class';
import { ListaAsignaturasComponent } from '../asignaturas/lista-asignaturas/lista-asignaturas.component';

@Component({
  selector: 'app-add-datos-modal',
  templateUrl: './add-datos-modal.component.html',
  styles: []
})
export class AddDatosModalComponent{
  closeResult: string;
  // creamos el objeto modal.
  constructor(private modalService: NgbModal){}
  // inicializamos el objeto modal.
  open(content){
    this.modalService.open(content);
    console.log("entre!");
  }
}
