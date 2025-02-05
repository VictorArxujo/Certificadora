import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisDoComponent } from './regis-do.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: RegisDoComponent
  }
]

@NgModule({
  declarations: [
    RegisDoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule, 
  ],
})
export class RegisDoModule { }
