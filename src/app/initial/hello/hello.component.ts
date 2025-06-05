import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hello',
  imports: [RouterModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  Acao(){
    console.log("Ação Executada!");
  }

  contador = signal(0);

  addContador(){
    this.contador.update(x => x + 1);
  }

  @Input() items = [];

  @Output() Confirmar = new EventEmitter<any>();

  

}
