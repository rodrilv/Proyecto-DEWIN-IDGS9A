import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   user = '';
   pass = '';
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    if("user" == this.user && this.pass == "pass"){
      Swal.fire({
        title: 'BIEN!',
        text: 'El formulario funciona correctamente!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }else{
      Swal.fire({
        title:"MAL!",
        text: "La contraseña o el usuario están mal",
        icon: "error",
        confirmButtonText: "Ok"
      })
    }
  }
}
