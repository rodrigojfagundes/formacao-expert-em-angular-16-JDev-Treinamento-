














import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulologin = 'Login da loja virtual jdev';

  
  
  
  
  constructor(private fb: FormBuilder) {}

  
  
  
  
  
  
  
  
  loginForm = this.fb.group({
    id: [],
    login: [null, Validators.required],
    senha: [null, Validators.required],
  });
}
