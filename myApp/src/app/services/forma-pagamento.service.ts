import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class FormaPagamentoService {
  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) {}
}
