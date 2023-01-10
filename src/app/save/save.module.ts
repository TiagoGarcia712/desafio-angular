import { RedirModule } from './../redir/redir.module';
import { SaveComponent } from './save.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SaveComponent
  ],
  imports: [
    CommonModule,
    RedirModule
  ],
  exports: [
    SaveComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SaveModule { }
