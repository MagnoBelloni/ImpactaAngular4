import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './rotas/app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { verificaChFilter } from './filters/verificarch.filter';

import { LogoComponent } from './logo/logo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { ListaComponent } from './lista/lista.component';
import { MasterDetailComponent } from './masterdetail/masterdetail.component';

//services
import { CursosService } from './services/cursos.service';



@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [AppComponent,
    MenuComponent,
    LogoComponent,
    CadastroComponent,
    NotFoundComponent,
    ListaComponent,
    MasterDetailComponent,
    verificaChFilter
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
