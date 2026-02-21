



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  private urlApi = environment.urlApi;

  
  
  constructor(private http: HttpClient, private routers: Router) {}

  
  usuarioLogado() {
    
    
    var autorization = '' + localStorage.getItem('Authorization');
    
    return (
      autorization !== '' && autorization !== null && autorization !== 'null'
    );
  }

  
  
  
  
  
  
  
  
  
  recuperarSenha(login: String) {
    return this.http
      .post<String>(environment.urlApiLocal + 'recuperarSenha', login)
      .subscribe({
        next: (res) => {
          
          
          
          
          
          
          var respJson = JSON.stringify(res);
          var resposta = JSON.parse(respJson);

          alert(resposta.msg);
        },
        error: (error) => {
          
          
          
          
          
          
          var respJson = JSON.stringify(error);
          var resposta = JSON.parse(respJson);
        },
      });
  }

  
  
  codEmpresa() {
    return localStorage.getItem('empresa');
  }

  
  
  
  logar(usuario: Usuario) {
    
    
    
    
    
    
    this.http.post<String>(this.urlApi + 'login', usuario).subscribe({
      
      next: (res) => {
        console.info('------------------jwt--------------');
        
        
        var respJson = JSON.stringify(res);
        
        
        var jwt = JSON.parse(respJson);
        
        
        
        
        
        
        
        
        localStorage.setItem('Authorization', jwt.Authorization);
        localStorage.setItem('username', jwt.username);
        localStorage.setItem('empresa', jwt.empresa);
        
        this.routers.navigate(['home']);
      },

      error: (error) => {
        console.info(error);
        
        
        
        alert('Deu erro ' + error.error.text);
      },
    });
  }

  
  deslogar(): void {
    
    
    localStorage.setItem('Authorization', '');
    localStorage.setItem('username', '');
    
    this.routers.navigate(['login']);
  }
}
