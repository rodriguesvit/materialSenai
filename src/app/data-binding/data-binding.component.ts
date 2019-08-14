import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string ="https://estudante.sc.senai.br//";
  urlimg: string = "https://extra.globo.com/incoming/14687558-e7f-3b0/w640h360-PROP/carrao.jpg";
  valorArmazenado: string ="";
  valorAtual: string = "";
  isMouseOver: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
  armazenarValor(valor: string){
    this.valorArmazenado = valor;
  }
  onMouseOver(){
    this.isMouseOver = true;
  }
  onMouseOut(){
    this.isMouseOver = false;
  }

}
