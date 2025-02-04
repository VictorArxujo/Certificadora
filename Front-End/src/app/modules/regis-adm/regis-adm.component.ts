import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis-adm',
  standalone: false,
  
  templateUrl: './regis-adm.component.html',
  styleUrl: './regis-adm.component.scss'
})
export class RegisAdmComponent {

  goBack(): void {
    console.log('Clicado');
    this.router.navigate(['./admin']);  
  }
  constructor(private router: Router) {}

  imagePath = "assets/Marca_Bons_Fluidos2.png"
}
