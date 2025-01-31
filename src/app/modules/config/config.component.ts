import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-config',
  standalone: false,
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  imagePath = "assets/Marca_Bons_Fluidos2.png";
  isPasswordCardVisible = false;
  isAboutCardVisible = false;

  constructor(private location: Location) {}

  showPasswordCard(): void {
    this.isPasswordCardVisible = true;
    this.isAboutCardVisible = false; // Garante que apenas um cartão é exibido
  }

  showAboutCard(): void {
    this.isAboutCardVisible = true;
    this.isPasswordCardVisible = false; // Garante que apenas um cartão é exibido
  }

  backToMainCard(): void {
    this.isPasswordCardVisible = false;
    this.isAboutCardVisible = false; // Retorna ao cartão principal
  }

  goBack(): void {
    this.location.back(); // Volta para a página anterior no histórico
  }
}
