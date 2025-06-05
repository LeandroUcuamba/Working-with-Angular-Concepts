import { Routes } from '@angular/router';
import { HelloComponent } from './initial/hello/hello.component';
import { ListaComponent } from './initial/lista/lista.component';
import { HelloGuardService } from './initial/hello/hello.guard.service';

export const routes: Routes = [
    {
        path: "hello",
        component: HelloComponent,
        children: [
            { path: "lista", component: ListaComponent, canActivate: [HelloGuardService] }
        ]
    },
    {
        path: "lista",
        component: ListaComponent
    }
];
