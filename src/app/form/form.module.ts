import { ButtonModule } from './../button/button.module';
import { SaveModule } from './../save/save.module';
import { FormComponent } from './form.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SaveModule,
    ButtonModule
  ],
  exports: [
    FormComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FormModule { }
