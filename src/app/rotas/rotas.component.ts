import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {
  valorTitulo: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
