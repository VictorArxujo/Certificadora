import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuasDoComponent } from './suas-do.component';
import { Route, RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: SuasDoComponent
  }
]

@NgModule({
  declarations: [
    SuasDoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class SuasDoModule { }