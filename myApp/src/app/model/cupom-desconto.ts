import { PessoaJuridica } from './pessoa-juridica';

export class CupomDesconto {
  constructor() {}

  id?: Number;
  codDesc?: String;
  DataValidadeCupom?: Date;
  valorRealDesc?: Number;
  valorPorcentDesc?: Number;
  empresa?: PessoaJuridica;
}
