import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import {}

@Injectable({
  providedIn: 'root'
})
export class RickymortyService {

  private base_url = '';
  private base_url_2 = '';
   
  constructor( private http: HttpClient) {

    this.base_url = environment.BASE_URL_RYM; 
    this.base_url_2 = environment.BASE_URL_RYM_PERSONAJES;   
   }
    
  getNewReleases() {
    return this.http.get(`${this.base_url}`)
                  
  }

  getNewPersonajes(){
    return this.http.get(`${this.base_url_2}`)
  }
}
