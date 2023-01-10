import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-redir',
  templateUrl: './redir.component.html',
  styleUrls: ['./redir.component.css']
})
export class RedirComponent implements OnInit {
  @Input() formValue : FormGroup | undefined;
  nome: string = '';
  idade: number = 0;
  email: string = '';

  constructor(private route: ActivatedRoute) {


  }

  ngOnInit(): void {

      setTimeout(() => {
        this.route.queryParams.subscribe(params=>{
          this.nome = params['nome'];
          this.idade = params['idade'];
          this.email = params['email']
          console.log(params);
          console.log(this.nome);
        })
      }, 3000);
  }

}
