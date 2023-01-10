import { RotacomfraseModule } from './rotacomfrase/rotacomfrase.module';
import { PipeWordModule } from './pipe-word/pipe-word.module';
import { SaveModule } from './save/save.module';
import { RotasModule } from './rotas/rotas.module';
import { FormModule } from './form/form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { AcessofraseComponent } from './acessofrase/acessofrase.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    RotasModule,
    PipeWordModule,
    SaveModule,
    ButtonModule,
    RotacomfraseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
