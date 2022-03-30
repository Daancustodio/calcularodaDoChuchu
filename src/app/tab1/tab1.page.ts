import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Resultado;
  InputsdeEntrada = "";
  ListaOperacoes = ['+','-','*','÷'];

  constructor() {
  }

  AddNumber(numero:string){
    if(this.InputsdeEntrada == "" && this.ListaOperacoes.includes(numero)){
      return;
    }

    if(numero=='C'){
      this.InputsdeEntrada="";
      this.Resultado = '';

    }else{
      this.InputsdeEntrada = this.InputsdeEntrada + numero;
    }

  }

  Calcular(){
    if(this.InputsdeEntrada.includes('+')){
      var valosParaSoma = this.InputsdeEntrada.split("+");
      var resultadoArtmetico = 0;
      valosParaSoma.forEach(stringNumerica => {
        resultadoArtmetico = resultadoArtmetico + parseInt(stringNumerica);
      });

      this.Resultado = resultadoArtmetico;
    }
  }

}
