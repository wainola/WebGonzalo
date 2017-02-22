// modulo de registro
import { Component, OnInit } from '@angular/core';
// importamos el servicio de validacion.
import { ValidateService } from  '../../services/validate.service';
// importamos flash mensajes.
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
// para aplicar redireccionado en el servicio que registra.
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  // es necesario inyectar el servicio.
  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }
  // metodo que envia los datos desde el formulario a la clase.
  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    // campos requeridos.
    if(!this.validateService.validateRegister(user)){
      // usamos mensajes flash
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Please fill in all fields');
      return false;
    }
    // validacion correo.
    if(!this.validateService.validateEmail(user.email)){
      // usamos mensajes flash
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Please use a valid email');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        console.log(data);
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        console.log(data);
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
