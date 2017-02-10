import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// importamos la clase modal creada.
import { ModalClass } from './modal-class';

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
  modal = MODAL;
  newModal(){
    this.modal = new ModalClass(
      2,
      "Torpedos Galacticos",
      "Jueves 23:00 PM",
      "Gor Bordul",
      "Golas Urion",
      "Timendo Sutendo",
      "Lexus de Axe"
    );
  }
}
const MODAL: ModalClass = new ModalClass(
  1,
  "Calculo Vectorial Galactico",
  "Miercoles 11:00 AM",
  "Eric Alfonsin",
  "Victor Victurin",
  "Alonso Romero",
  "Antonio Romero"
);
