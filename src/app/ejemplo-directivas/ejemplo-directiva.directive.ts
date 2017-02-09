import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEjemploDirectiva]'
})
export class EjemploDirectivaDirective {
  constructor(el: ElementRef){
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
