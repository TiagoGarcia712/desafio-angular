import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  @Input() formValue : FormGroup | undefined;


  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  handleClick(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          nome: this.formValue?.value.nome,
          idade: this.formValue?.value.idade,
          email: this.formValue?.value.email
      }
  }
    if(this.formValue?.valid){
      this.router.navigate(['/redir'], navigationExtras);
    }

    console.log(this.formValue?.value);
  }

}
