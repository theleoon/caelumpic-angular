import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FotoModule } from './Foto/foto.module';
/** modulo http */
import { HttpModule } from '@angular/http';
/** .map na nossa classe app.component */
import 'rxjs/add/operator/map'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
