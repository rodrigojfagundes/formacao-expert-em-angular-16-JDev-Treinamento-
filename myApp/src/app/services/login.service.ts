



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  private urlApi = environment.urlApiLocal + 'login';

  
  constructor(private http: HttpClient) {}

  
  
  
  logar(usuario: Usuario) {
    
    
    
    
    
    
    this.http.post<String>(this.urlApi, usuario).subscribe({
      
      next: (res) => {
        console.info('------------------jwt--------------');
        console.info(res);
        console.info('------------------jwt--------------');
        alert('Login realizado');
      },

      error: (error) => {
        console.info(error);
        alert('Deu erro');
      },
    });
  }
}
