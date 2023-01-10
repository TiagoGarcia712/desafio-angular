import { RotacomfraseModule } from './../rotacomfrase/rotacomfrase.module';
import { PipeWordModule } from './../pipe-word/pipe-word.module';
import { RedirComponent } from './redir.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RedirComponent
  ],
  imports: [
    CommonModule,
    PipeWordModule,
    RotacomfraseModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class RedirModule { }
