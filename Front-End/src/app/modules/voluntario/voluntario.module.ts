import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoluntarioComponent } from './voluntario.component';
import { Route, RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: VoluntarioComponent
  }
]


@NgModule({
  declarations: [
    VoluntarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class VoluntarioModule { }
