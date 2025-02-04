import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/home.component';
import { LoginModule } from './modules/login/login.module';
import { Registro2Module } from './modules/registro2/registro2.module';
import { Registro2Component } from './modules/registro2/registro2.component';
import { VoluntarioComponent } from './modules/voluntario/voluntario.component';
import { SuasDoComponent } from './modules/suas-do/suas-do.component';
import { RegisDoComponent } from './modules/regis-do/regis-do.component';
import { ConfigComponent } from './modules/config/config.component';
import { AdminComponent } from './modules/admin/admin.component';
import { ControleComponent } from './modules/controle/controle.component';
import { RegisAdmComponent } from './modules/regis-adm/regis-adm.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
