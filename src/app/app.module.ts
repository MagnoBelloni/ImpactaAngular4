import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { appRoutes } from './rotas/app.routes';
import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component';

import { LogoComponent } from './logo/logo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
                  MenuComponent,
                  LogoComponent,
                  CadastroComponent,
                  NotFoundComponent,
                  ListaComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
