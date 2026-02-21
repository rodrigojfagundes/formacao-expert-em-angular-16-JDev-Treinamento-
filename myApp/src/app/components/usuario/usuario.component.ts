import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

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
}
