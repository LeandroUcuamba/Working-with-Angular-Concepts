import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./initial/hello/hello.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'Leandro Ucuamba';

  contador = signal(0);

  addContador(){
    this.contador.update(x => x + 1);
  }
}
