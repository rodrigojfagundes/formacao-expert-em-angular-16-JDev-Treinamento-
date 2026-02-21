



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  private urlApi = environment.urlApi + 'login';

  
  constructor(private http: HttpClient) {}

  
  
  
  
  
  
  
  
  
  recuperarSenha(login: String) {
    return this.http
      .post<String>(environment.urlApiLocal + 'recuperarSenha', login)
      .subscribe({
        next: (res) => {
          alert(JSON.stringify(res));
        },
        error: (error) => {
          console.info(error);
          alert('Erro ao recuperar senha: ' + error);
        },
      });
  }

  
  
  
  logar(usuario: Usuario) {
    
    
    
    
    
    
    this.http.post<String>(this.urlApi, usuario).subscribe({
      
      next: (res) => {
        console.info('------------------jwt--------------');
        
        
        var respJson = JSON.stringify(res);
        
        
        var jwt = JSON.parse(respJson);
        
        localStorage.setItem('Authorization', jwt.Authorization);
      },

      error: (error) => {
        console.info(error);
        
        
        
        alert('Deu erro ' + error.error.text);
      },
    });
  }
}
