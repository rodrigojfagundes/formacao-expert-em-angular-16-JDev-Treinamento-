import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPessoa } from 'src/app/model/user-pessoa';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoginService } from 'src/app/services/login.service';
import { PessoaFisicaService } from 'src/app/services/pessoaFisica.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  lista = new Array<UserPessoa>();
  userProdForm: FormGroup;
  user: UserPessoa;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private usuarioService: UsuarioService
  ) {
    this.user = new UserPessoa();
    this.userProdForm = this.fb.group({
      id: [],
      login: [null, Validators.required],
      senha: [null, Validators.required],
      pessoa: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.listUser();
  }

  listUser() {
    this.usuarioService.listUserByEmpresa().subscribe({
      next: (res) => {
        this.lista = res;
        
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  novo(): void {
    this.userProdForm = this.fb.group({
      id: [],
      login: [[null, Validators.required]],
      senha: [[null, Validators.required]],
      pessoa: [null, Validators.required],
    });
  }

  userObjeto(): UserPessoa {
    return {
      id: this.userProdForm.get('id')?.value!,
      login: this.userProdForm.get('login')?.value!,
      senha: this.userProdForm.get('senha')?.value!,
    };
  }

  editarUser(id: any): void {
    this.usuarioService.buscarPorId(id).subscribe({
      next: (data) => {
        this.user = data;
        this.userProdForm = this.fb.group({
          id: [this.user.id],
          login: [this.user.login],
          senha: [this.user.senha],
          pessoa: [this.user.pessoa?.nome],
        });
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
