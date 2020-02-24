import { Routes } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { NotFoundComponent } from '../erro/notFound.component';
import { ListaComponent } from '../lista/lista.component';
import { MasterDetailComponent } from '../masterdetail/masterdetail.component';

export const appRoutes: Routes = [
    { path: '', component: LogoComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'masterdetail', component: MasterDetailComponent},
    { path: '**', component: NotFoundComponent }
];