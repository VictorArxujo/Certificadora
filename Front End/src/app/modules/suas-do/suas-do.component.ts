import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router


@Component({
  selector: 'app-suas-do',
  standalone: false,
  
  templateUrl: './suas-do.component.html',
  styleUrl: './suas-do.component.scss'
})
export class SuasDoComponent {
  imagePath = "assets/Marca_Bons_Fluidos2.png"
  activeIndex: number = 0; // Índice do item ativo no menu

  constructor(private router: Router) {}  // Injeção do Router no construtor

  // Método para navegar de volta para a página do voluntário
  goBack(): void {
    this.router.navigate(['/voluntario']);  // Altere para o caminho correto da rota
  }
  // Método para definir o item ativo
  setActive(index: number): void {
    this.activeIndex = index;
  }

  // Método para verificar se um item está ativo
  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

}
