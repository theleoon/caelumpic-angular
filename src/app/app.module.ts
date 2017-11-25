import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/** modulo http */
import { HttpModule } from '@angular/http';
import { FotoModule } from './Foto/foto.module';
import { PainelModule } from './Painel/painel.module';
/** .map na nossa classe app.component */
import 'rxjs/add/operator/map';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { routing } from './app.routes';
import { Page404Component } from './page404/page404.component';
import { DestroyComponent } from './destroy/destroy.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { BotaoComponent } from './Botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    Page404Component,
    DestroyComponent,
    InicioComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
