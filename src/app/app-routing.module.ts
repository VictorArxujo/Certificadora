import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./modules/registro2/registro2.module').then(m => m.Registro2Module)
  },
  {
    path: 'voluntario',
    loadChildren: () => import('./modules/voluntario/voluntario.module').then(m => m.VoluntarioModule)
  },
  {
    path: 'suasDo',
    loadChildren: () => import('./modules/suas-do/suas-do.module').then(m => m.SuasDoModule)
  },
  {
    path: 'regisDo',
    loadChildren: () => import('./modules/regis-do/regis-do.module').then(m => m.RegisDoModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/config.module').then(m=>m.ConfigModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'controle',
    loadChildren: () => import('./modules/controle/controle.module').then(m => m.ControleModule)
  },
  {
    path: 'regisAdm',
    loadChildren: () => import('./modules/regis-adm/regis-adm.module').then (m => m.RegisAdmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
