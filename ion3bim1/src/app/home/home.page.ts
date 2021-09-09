import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina = null;
  etanol = null;
  resposta = null

  imagens = [
    'logo.jpg',
    'gasolina.jpg',
    'etanol.jpg',
    'dois.jpg'
  ]

  imagem = this.imagens[0];

  constructor() {}

  verificar(): void{
    let diferenca = this.resposta = this.etanol/ this.gasolina;
    if(diferenca>0.7){
      this.imagem = this.imagens[1];
    }else if(diferenca<0.7){
      this.imagem = this.imagens[2];
    }else{
      this.imagem = this.imagens[3]
    }
  }
}

