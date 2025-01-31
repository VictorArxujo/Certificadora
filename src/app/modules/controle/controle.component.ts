import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Router } from '@angular/router';


@Component({
  selector: 'app-controle',
  standalone: false,
  
  templateUrl: './controle.component.html',
  styleUrl: './controle.component.scss'
})
export class ControleComponent implements AfterViewInit {

  @ViewChild('meuGrafico2', { static: false }) elemento!: ElementRef;

  imagePath = "assets/Marca_Bons_Fluidos2.png"
  
  goBack(): void {
    this.router.navigate(['./admin']);  
  }
  constructor(private router: Router) {}

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
