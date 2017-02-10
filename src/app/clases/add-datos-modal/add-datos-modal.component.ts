import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
