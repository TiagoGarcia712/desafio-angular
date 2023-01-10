import { ComponentRotasRoutingModule } from './rotas-routing.module';
import { RotasComponent } from './rotas.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RotasComponent
  ],
  imports: [
    CommonModule,
    ComponentRotasRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class RotasModule { }
