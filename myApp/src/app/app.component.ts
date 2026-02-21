














import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulologin = 'Login da loja virtual jdev';

  
  
  
  
  
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  
  
  
  
  
  
  
  
  loginForm = this.fb.group({
    id: [],
    login: [null, Validators.required],
    senha: [null, Validators.required],
  });

  
  
  
  
  
  
  
  loginObjeto(): Usuario {
    return {
      login: this.loginForm.get('login')?.value!,
      senha: this.loginForm.get('senha')?.value!,
    };
  }

  
  
  
  
  
  fazerLogin() {
    const usuario = this.loginObjeto();

    this.loginService.logar(usuario);

    
    console.info('dado de login -> ' + usuario.login);
    console.info('dado de senha -> ' + usuario.senha);
  }
}
