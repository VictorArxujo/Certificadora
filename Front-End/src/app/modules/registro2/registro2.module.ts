import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registro2Component } from './registro2.component';

const routes: Routes = [
  { path: '', component: Registro2Component }
];

@NgModule({
  declarations: [Registro2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Registro2Module {}
