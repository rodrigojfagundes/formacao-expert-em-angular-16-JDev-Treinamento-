import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaProduto } from 'src/app/model/categoria-produto';
import { CategoriaProdutoService } from 'src/app/services/categoria-produto.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-categoria-produto',
  templateUrl: './categoria-produto.component.html',
  styleUrls: ['./categoria-produto.component.css'],
})





export class CategoriaProdutoComponent implements OnInit {
  
  lista = new Array<CategoriaProduto>();
  
  catProdForm: FormGroup;
  
  catproduto: CategoriaProduto;

  
  
  
  
  
  constructor(
    private fb: FormBuilder,
    private categoriaProdutoService: CategoriaProdutoService,
    private loginService: LoginService
  ) {
    
    
    this.catproduto = new CategoriaProduto();

    /*pegar dados inicia e limpa o formulario q ta no categoria-produto.component.html e verificando
  se o nomedesc nao ta null...
  basicamente estamos instanciando um obj/var do tipo FB(FORMBUILDER) de nome CATPRODFORM
  q vai receber o metodo GROUP q e esse metodo nos vamos informar as VAR/OBJ do CATEGORIA-PRODUTO.TS
  e as validacoes.. tipo o nomedesc nao pd ser null
  */
    this.catProdForm = this.fb.group({
      id: [],
      nomeDesc: [null, Validators.required],
      
      
      
      empresa: [this.loginService.objetoEmpresa(), Validators.required],
    });
  }

  
  
  
  
  ngOnInit(): void {
    
    this.listaCategorias();
  }

  
  
  
  
  
  novo(): void {
    this.catProdForm = this.fb.group({
      id: [],
      nomeDesc: [null, Validators.required],
      
      
      
      empresa: [this.loginService.objetoEmpresa(), Validators.required],
    });
  }

  
  
  listaCategorias() {
    
    
    
    this.categoriaProdutoService.listarCategoriaProduto().subscribe({
      
      
      next: (res) => {
        this.lista = res;
      },
      error: (error) => {
        
        alert(error);
      },
    });
  }

  
  
  
  
  
  
  
  catProdObjeto(): CategoriaProduto {
    return {
      id: this.catProdForm.get('id')?.value!,
      nomeDesc: this.catProdForm.get('nomeDesc')?.value!,
      empresa: this.catProdForm.get('empresa')?.value!,
    };
  }

  
  
  
  
  
  cadProdCategoria(): void {
    const categoria = this.catProdObjeto();
    console.info(categoria);

    
    
    
    this.categoriaProdutoService.salvarCategoriaProduto(categoria);
    
    
    this.novo();
    this.listaCategorias();
  }

  
  
  
  
  editarCp(c: CategoriaProduto): void {
    
    
    
    
    
    
    this.categoriaProdutoService.buscarPorId(c.id).subscribe({
      next: (data) => {
        this.catproduto = data;

        this.catProdForm = this.fb.group({
          
          id: [this.catproduto.id],
          nomeDesc: [this.catproduto.nomeDesc, Validators.required],
          empresa: [this.catproduto.empresa, Validators.required],
        });
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  
  
  
  
  deletar(c: CategoriaProduto): void {
    var confir = confirm('Deseja mesmo deletar?');
    if (confir) {
      this.categoriaProdutoService.deletar(c);
      
      
      this.listaCategorias();
    }
  }
}
