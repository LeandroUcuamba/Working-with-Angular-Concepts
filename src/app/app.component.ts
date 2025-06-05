import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
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
