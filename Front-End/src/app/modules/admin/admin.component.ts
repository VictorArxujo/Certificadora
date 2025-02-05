import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements AfterViewInit{

  imagePath = "assets/Marca_Bons_Fluidos2.png"

  @ViewChild('meuGrafico2', { static: false }) elemento!: ElementRef;


  constructor(private router: Router) {}

  navegarParaDoacoes() {
    console.log('Botão de Controle de Doações clicado!');
    // Asserção não nula (Opção 1)
    this.router!.navigate(['/controle']);

    // Ou Verificação explícita (Opção 2)
    // if (this.router) {
    //   this.router.navigate(['/registro-doacoes']);
    // }
  }
  navegarParaRegistro(){
  
    console.log('Botão de Registro de Doações clicado!');
    // Asserção não nula (Opção 1)
    this.router!.navigate(['/regisAdm']);

    // Ou Verificação explícita (Opção 2)
    // if (this.router) {
    //   this.router.navigate(['/registro-doacoes']);
    // }
  }


  ngAfterViewInit(): void {
    const canvas = this.elemento?.nativeElement as HTMLCanvasElement; // Garante que o elemento é um canvas
    const ctx = canvas.getContext('2d'); // Obtém o contexto 2D

    if (ctx) { // Garante que o contexto 2D foi obtido corretamente
      new Chart(ctx, {
        type: 'bar', // Tipo de gráfico
        data: {
          labels: ['Absorvente Externo com Abas', 'Absorvente Externo sem Abas', 'Absorvente Interno', 'Outros'], // Exemplo de labels
          datasets: [
            {
              label: 'Absorventes',
              data: [10, 20, 30,10 ], // Exemplo de dados
              borderColor: '#E1EBFF',
              backgroundColor: ' #b60528',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true, // Faz o gráfico ser responsivo
          maintainAspectRatio: true, // Mantém a proporção do gráfico
        }
      });
    } else {
      console.error('Não foi possível obter o contexto 2D do canvas.');
    }

    console.log('Gráfico inicializado');
  }
}
