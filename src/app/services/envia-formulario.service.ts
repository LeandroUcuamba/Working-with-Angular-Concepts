import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviarInformacaoParaBackend(info: string){
    console.log("Enviando para o backend: " + info)
  }
}
