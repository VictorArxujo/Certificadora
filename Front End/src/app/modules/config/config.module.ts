import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { Route, RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ConfigComponent
  }
]

@NgModule({
  declarations: [
    ConfigComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ConfigModule { }
