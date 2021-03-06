import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { appRoutes } from './rotas/app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { verificaChFilter } from './filters/verificarch.filter';
import { SublistaFilter } from './filters/sublista.filter';

import { LogoComponent } from './logo/logo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { ListaComponent } from './lista/lista.component';
import { MasterDetailComponent } from './masterdetail/masterdetail.component';

//services
import { CursosService } from './services/cursos.service';




@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, 
            HttpModule],
  declarations: [AppComponent,
    MenuComponent,
    LogoComponent,
    CadastroComponent,
    NotFoundComponent,
    ListaComponent,
    MasterDetailComponent,
    verificaChFilter,
    SublistaFilter
    
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
