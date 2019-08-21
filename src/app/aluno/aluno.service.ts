import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {

  private alunosDesenv: string [];
  private alunosRedes: string [];

  constructor() { 
    this.alunosDesenv = ['Pedro','José','Maria', 'Billy'];
    this.alunosRedes = ['Bilulinho','Marrequinho','Jureminha', 'Birosquinho'];
  }

  getAlunosDesenv(){
    return this.alunosDesenv;
  }

  getAlunosRedes(){
    return this.alunosRedes;
  }
}
