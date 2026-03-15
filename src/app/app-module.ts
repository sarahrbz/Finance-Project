import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Lancamentos } from './pages/lancamentos/lancamentos';
import { Categorias } from './pages/categorias/categorias';
import { Navbar } from './components/navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Login,
    Cadastro,
    Lancamentos,
    Categorias,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
