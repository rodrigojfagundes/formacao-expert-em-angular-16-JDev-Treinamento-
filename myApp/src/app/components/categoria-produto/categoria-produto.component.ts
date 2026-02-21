import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriaProduto } from 'src/app/model/categoria-produto';
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

  /*pegar dados do formulario q ta no categoria-produto.component.html e verificando
  se o nomedesc nao ta null...
  basicamente estamos instanciando um obj/var do tipo FB(FORMBUILDER) de nome CATPRODFORM
  q vai receber o metodo GROUP q e esse metodo nos vamos informar as VAR/OBJ do CATEGORIA-PRODUTO.TS
  e as validacoes.. tipo o nomedesc nao pd ser null
  */
  catProdForm = this.fb.group({
    id: [],
    nomeDesc: [null, Validators.required],
  });

  
  
  
  
  
  
  
  catProdObjeto(): CategoriaProduto {
    console.info('chamou cadProdObjeto');
    return {
      id: this.catProdForm.get('id')?.value!,
      nomeDesc: this.catProdForm.get('nomeDesc')?.value!,
      empresa: this.catProdForm.get('empresa')?.value!,
    };
  }

  
  
  
  cadProdCategoria() {
    const categoria = this.catProdObjeto();
    console.debug('---> ' + categoria);
  }
}
