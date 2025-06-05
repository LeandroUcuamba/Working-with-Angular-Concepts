import { Routes } from '@angular/router';
import { HelloComponent } from './initial/hello/hello.component';
import { ListaComponent } from './initial/lista/lista.component';
import { HelloGuardService } from './initial/hello/hello.guard.service';

export const routes: Routes = [
    {
        path: "hello",
        component: HelloComponent,
        canActivateChild: [HelloGuardService],
        children: [
            { path: "lista", component: ListaComponent }
        ]
    },
    {
        path: "lista",
        component: ListaComponent
    }
];
