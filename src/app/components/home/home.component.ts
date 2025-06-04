import { Component, inject, Input } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "Leandro Ucuamba"
  idButton = "jdjdjdjd"
  deveMostrarTitulo = false;
  listItems = ["Um","Dois","Três"];

  @Input("name") testeee!: string;

  submit(){
    this.enviaFormularioService.enviarInformacaoParaBackend("processando")
  }
}
