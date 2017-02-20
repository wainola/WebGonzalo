import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styles: []
})
export class CursoFormComponent {
  form: FormGroup;
  elemento:string = this.form.value;

  constructor(public fb: FormBuilder){
    this.form = this.fb.group({
      first: ''
    });
  }
  enClick(){
    this.elemento = this.form.value.first;
    console.log(this.elemento);
  }
}
