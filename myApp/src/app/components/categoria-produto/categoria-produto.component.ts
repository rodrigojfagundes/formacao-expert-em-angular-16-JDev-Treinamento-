import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriaProdutoService } from 'src/app/services/categoria-produto.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-categoria-produto',
  templateUrl: './categoria-produto.component.html',
  styleUrls: ['./categoria-produto.component.css'],
})


export class CategoriaProdutoComponent {
  
  
  
  constructor(
    private fb: FormBuilder,
    private categoriaProdutoService: CategoriaProdutoService
  ) {}
}
