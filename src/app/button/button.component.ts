import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';import { Router } from '@angular/router';
;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() cadastrarUsuario: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.router.navigate(['/form']);

  }

}
