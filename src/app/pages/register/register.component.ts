import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,         
    private registerUser:AuthService, 
    private router: Router) {

    this.crearFormulario();
   }

  ngOnInit(): void {
  }
  
  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  };
  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  };
  get documentoNoValido() {
    return this.forma.get('documento')?.invalid && this.forma.get('documento')?.touched
  };
  get claveNoValido() {
    return this.forma.get('clave')?.invalid && this.forma.get('clave')?.touched
  };
  get correoNoValido() {
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  };

  crearFormulario() {
    this.forma = this.fb.group({
      nombre    :['', [Validators.required, Validators.minLength(5)]],
      apellido  :['', [Validators.required, Validators.minLength(5)]],
      doctoIdent:['', [Validators.required]],
      email     :['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      clave     :['', [Validators.required, Validators.minLength(5)]],
      cia       :['10']
    })  
  }
  guardar(){
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

      this.registerUser.authUserRegister(this.forma.value)
      .subscribe((resp:any) =>{
        Swal.close();
        this.router.navigateByUrl('/app/list-episodes')
      }, (err) =>{
        Swal.fire({
          title: 'Usuario no valido.',
          icon: 'error',
        })
      }
      )
    }
    
  }

}
