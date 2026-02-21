import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
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
  lista = new Array<Usuario>();
  userProdForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private usuarioService: UsuarioService
  ) {
    this.userProdForm = this.fb.group({
      id: [],
    });
  }

  ngOnInit(): void {
    this.listUser();
  }

  listUser() {
    this.usuarioService.listUserByEmpresa().subscribe({
      next: (res) => {
        this.lista = res;
        console.info(this.lista);
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  novo(): void {
    this.userProdForm = this.fb.group({
      id: [],
    });
  }

  userObjeto(): Usuario {
    return {
      id: this.userProdForm.get('id')?.value!,
      login: this.userProdForm.get('login')?.value!,
      senha: this.userProdForm.get('senha')?.value!,
    };
  }

  editarUser(u: Usuario): void {
    this.userProdForm = this.fb.group({
      id: [this.pj.id],
    });
  }
}
