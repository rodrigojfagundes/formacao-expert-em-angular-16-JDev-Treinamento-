import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormaPagamento } from 'src/app/model/forma-pagamento';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css'],
})
export class FormaPagamentoComponent {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private formaPagamento: FormaPagamento
  ) {}
}
