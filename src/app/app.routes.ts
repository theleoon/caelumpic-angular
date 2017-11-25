import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Page404Component } from './page404/page404.component';
import { DestroyComponent } from './destroy/destroy.component';

const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'lista', component: ListagemComponent },
    { path: 'destroy', component: DestroyComponent },
    //{ path: '**', redirectTo: '' }
    { path: '**', component: Page404Component }
    ];

export const routing = RouterModule.forRoot(appRoutes);