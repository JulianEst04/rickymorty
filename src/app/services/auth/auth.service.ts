import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRegister } from 'src/app/pages/register/user-register';
import { UserLogin } from 'src/app/pages/login/user-login';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = '';
  userToken:string | null = null;

  constructor(private http: HttpClient){
    this.verificarToken();
    this.base_url = environment.BASE_URL;

  }
  authUserRegister(dataUser:UserRegister){
    const authData = {
      ...dataUser,
      returnSecureToken: true
    }
    return this.http.post(`${this.base_url}/Seleccion/api/SOL/RegistroInicialSolicitante`, dataUser).pipe(
      map((resp:any) =>{
        this.guardarToken(resp.token);
        return resp;
      })
    );

  };
  authLoginUser(loginUser:UserLogin){
    const authData = {
      ...loginUser,
      returnSecureToken: true
    }
    return this.http.post(`${this.base_url}/Security/api/SEG`, loginUser).pipe(
      map((resp:any) =>{
        this.guardarToken(resp.token);
        return resp;
      })
    );
  };
   
  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }
  verificarToken() {

    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');

    }else{
      this.userToken= '';
    }
    return this.userToken;

  }
  logout(){
    localStorage.removeItem('token');
  }
}
