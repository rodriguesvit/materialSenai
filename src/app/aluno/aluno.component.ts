import { Component, OnInit, Input } from '@angular/core';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService]
})
export class AlunoComponent implements OnInit {

  alunosDesenv: string[];
  alunosRedes: string[];
  @Input() curso: string = "";

  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.alunosDesenv = this.service.getAlunosDesenv();
    this.alunosRedes = this.service.getAlunosRedes();
  }

  getAlunos(){
    if (this.curso === 'Desenvolvimento') return this.alunosDesenv;
    if (this.curso === 'Redes') return this.alunosRedes;
    return [];
  }
}

