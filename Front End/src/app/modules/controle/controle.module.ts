import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ControleComponent } from './controle.component';

const routes = [
  {
    path: '',
    component: ControleComponent
  }
]


@NgModule({
  declarations: [
    ControleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ControleModule { }
