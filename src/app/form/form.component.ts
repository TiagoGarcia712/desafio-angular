import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponentInterface } from './form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formValue = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    idade: new FormControl(),
    email: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {

  }

}
