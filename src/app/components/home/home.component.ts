import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Leandro Ucuamba"
  idButton = "jdjdjdjd"
  deveMostrarTitulo = false;
  listItems = ["Um","Dois","Três"];

  submit($event: any){
    console.log(event)
  }
}
