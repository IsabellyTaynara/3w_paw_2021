import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina = undefined;
  etanol = undefined;
  resposta = undefined;

  constructor() {}

  verificar(): void{
    let diferenca = this.etanol / this.gasolina;
    this.resposta = this.etanol / this.gasolina;
    if(diferenca > 0.7){
      this.resposta ="GASOLINA";
    }else if(diferenca < 0.7){
      this.resposta ="ETANOL";
    }else{
      this.resposta ="TANTO FAZ.."
    }
  }
}
