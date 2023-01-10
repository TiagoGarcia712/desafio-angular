import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotacomfrase',
  templateUrl: './rotacomfrase.component.html',
  styleUrls: ['./rotacomfrase.component.css']
})
export class RotacomfraseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.router.navigate(['/acessofrase'])

  }

}
