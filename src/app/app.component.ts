import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./initial/hello/hello.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'Leandro Ucuamba';

  items = [
    "maça",
    "banana",
    "uva"
  ] as any

  GerarRelatorio(){
    alert("Gerar relatorio...")
  }
}
