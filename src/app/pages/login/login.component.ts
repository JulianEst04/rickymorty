import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  

  forma: FormGroup = this.fb.group({});
  constructor(
    private fb: FormBuilder, 
    private loginUser:AuthService, 
    private router:Router) {
    
    this.ingresarUsuario();
   }

  ngOnInit(): void {
  }
  get nombreNoValido() {
    return this.forma.get('username')?.invalid && this.forma.get('username')?.touched
  };
  get contrasenaNoValido() {
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched
  };

  ingresarUsuario() {
    this.forma = this.fb.group({
      password:['', [Validators.required]],
      username:['', [Validators.required]],
      desdeMs :[true]
    }
    )
  }
  entrar(){
    if(this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control =>{
        control.markAsTouched();
      });
      
    }else{
      
      Swal.fire({
        title: 'Cargando.',
        text: 'Por favor espere...',
        icon: 'info',
      })
      Swal.showLoading();

      this.loginUser.authLoginUser(this.forma.value)
      .subscribe((resp:any) =>{
        Swal.close();
        this.router.navigateByUrl('/app/list-episodes')
      },(err) =>{
        Swal.fire({
          title: 'Usuario no valido.',
          icon: 'error',
        })
      })
      
    }
    
  }

}
