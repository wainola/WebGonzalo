import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  //inyectamos los servicios.
  constructor(
    private authService:AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    // Este objeto lo enviamos para autenticacion.
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        console.log(data);
        //generamos un servicio de autenticacion.
        this.authService.storeUserData(data.token, data.user);
        //enviamos un mensaje y luego redireccionamos.
        this.flashMessage.show('You are now logged in', {cssClass: "alert-success", timeout: 5000});
        //redireccionando.
        this.router.navigate(['/dashboard']);
        
      } else {
        this.flashMessage.show(data.msg, {cssClass: "alert-danger", timeout: 5000});
        //redireccionando.
        this.router.navigate(['/login']);
      }
    });
  }
}
