import { AcessofraseModule } from './../acessofrase/acessofrase.module';
import { RotacomfraseComponent } from './rotacomfrase.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RotacomfraseComponent
  ],
  imports: [
    CommonModule,
    AcessofraseModule
  ],
  exports: [
    RotacomfraseComponent
  ]
})
export class RotacomfraseModule { }
