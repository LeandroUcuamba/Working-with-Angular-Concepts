import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  imports: [RouterModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit{

  constructor(private service: HelloService){

  }
  ngOnInit(): void {
    this.service.getPoke()
        .subscribe(
          res => {
            this.pokelist = res.result;
            console.log(res);
          }
        )
  }

  pokelist: any;

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
