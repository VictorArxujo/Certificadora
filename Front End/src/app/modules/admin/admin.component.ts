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

  @ViewChild('meuGrafico', { static: false }) elemento!: ElementRef;

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
    const ctx = this.elemento.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          "Janeiro", "Fevereiro", "Março", "Abril", "Maio",
          "Junho", "Julho", "Agosto", "Setembro",
          "Outubro", "Novembro", "Dezembro"
        ],
        datasets: [
          {
            label: 'Dados Mensais',
            data: [30, 45, 24, 20, 30, 50, 65, 60, 60, 75, 100, 120],
            borderColor: '#E1EBFF',
            backgroundColor: ' #b60528',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
    console.log('oie');
  }
}
