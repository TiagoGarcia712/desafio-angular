import { PipeWordPipe } from './pipe-word.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PipeWordPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeWordPipe
  ]
})
export class PipeWordModule { }
