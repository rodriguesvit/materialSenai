import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursoAtual: string = "";

  curso: any = {
    nome: null,
    descricao: null,
    email: null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario) {
    console.log(formulario.form.value);
    console.log(this.curso);
  }
}
