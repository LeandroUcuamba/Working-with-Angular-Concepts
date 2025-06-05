import { Routes } from '@angular/router';
import { HelloComponent } from './initial/hello/hello.component';
import { ListaComponent } from './initial/lista/lista.component';

export const routes: Routes = [
    {
        path: "hello",
        component: HelloComponent,
        children: [
            { path: "lista", component: ListaComponent }
        ]
    },
    {
        path: "lista",
        component: ListaComponent
    }
];
