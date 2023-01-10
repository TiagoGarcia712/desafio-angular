import { GuardRouteGuard } from './../guard/guard-route.guard';
import { AcessofraseComponent } from './../acessofrase/acessofrase.component';
import { ButtonComponent } from './../button/button.component';
import { RedirComponent } from './../redir/redir.component';
import { FormComponent } from './../form/form.component';
import { RotasComponent } from './rotas.component';
import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: RotasComponent },
  { path: 'form', component: FormComponent },
  { path: 'redir', component: RedirComponent },
  { path: 'acessofrase', component: AcessofraseComponent, canActivate: [GuardRouteGuard] }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
  providers: []
})
export class ComponentRotasRoutingModule { }
