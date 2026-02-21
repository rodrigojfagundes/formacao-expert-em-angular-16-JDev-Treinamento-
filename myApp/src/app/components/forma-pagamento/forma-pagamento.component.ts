import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormaPagamento } from 'src/app/model/forma-pagamento';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css'],
})
export class FormaPagamentoComponent implements OnInit {
  
  lista = new Array<FormaPagamento>();
  
  FormPagProdForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private formaPagamento: FormaPagamento
  ) {
    this.FormPagProdForm = this.fb.group({
      id: [],
      descricao: [null, Validators.required],
      empresa: [this.loginService.objetoEmpresa(), Validators.required],
    });
  }

  ngOnInit(): void {}
}
