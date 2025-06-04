import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Leandro Ucuamba"
  idButtonOne = "jdjdjdjd"
  idButtonTwo = "kmkmkmkm"
  idButtonThree = "popopopo"

  //atualizarBooleano(valor: boolean){
  //  this.meuBooleano = valor;
  //}

  submit(){
    console.log("Reproduzir Video...")
  }
}
