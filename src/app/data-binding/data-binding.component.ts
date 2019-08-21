import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url: string = "Senai";
urlimagem: string = "https://conexaoestudante.com.br/wp-content/uploads/2019/06/SENAI.jpg"
valorArmazenado: string = "";
valorAtual: string = "";
isMouseOver: boolean = false;
showMessage: boolean = false;
classe: string = "";

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  armazenarValor(valor: string){
    this.valorArmazenado = valor;
  }

  onMouseOver() {
    this.isMouseOver = true;
  }

  onMouseOut() {
    this.isMouseOver = false;
  }

  changeShowMessage() {
    this.showMessage = !this.showMessage;
  }

  changeClass(classe: string) {
    this.classe = classe;
  }
}
