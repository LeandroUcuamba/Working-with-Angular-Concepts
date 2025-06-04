import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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

  @Output() emitindoValorName = new EventEmitter<string>();

  submit(){
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviarInformacaoParaBackend("processando")
  }
}
