import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
declare var iziToast;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : any = {};
  public usuario : any = {};
  public token;


  constructor(
    private _clienteService: ClienteService,
    private _router : Router
  ) { 
    this.token = localStorage.getItem('token');
    if(this.token){
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {

  }

  login(loginForm){
    if(loginForm.valid){
      
      let data = {
        email: this.user.email,
        password: this.user.password
      }
      
      this._clienteService.login_cliente(data).subscribe(
        response=>{
          if(response.data == undefined){
            iziToast.show({
                title: 'ERROR',
                titleColor: '#FF0000',
                color: '#FFF',
                class: 'text-danger',
                position: 'topRight',
                message: response.message
            });
          }else{
            this.usuario = response.data;
            localStorage.setItem('token',response.token);
            localStorage.setItem('_id',response.data._id);

            this._router.navigate(['/']);

          }
         
        },
        error=>{
          console.log(error);
          
        }
      );
      
    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'Los datos del formulario no son validos'
      });
    }
  }
}


// const registerButton = document.getElementById("register");
// const loginButton = document.getElementById("login");
// const container = document.getElementById("container");

// registerButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// loginButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });