import { PessoaJuridica } from './pessoa-juridica';

export class CupomDesconto {
  constructor() {}

  id?: Number;
  descricao?: String;
  DataValidadeCupom?: Date;
  valorRealDesc?: Number;
  valorPorcentDesc?: Number;
  empresa?: PessoaJuridica;
}
