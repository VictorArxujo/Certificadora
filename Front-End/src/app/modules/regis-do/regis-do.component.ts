import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para navegação
import { DoarService } from '../../services/doar.service';

@Component({
  selector: 'app-regis-do',
  standalone: false,
  templateUrl: './regis-do.component.html',
  styleUrls: ['./regis-do.component.scss']
})

export class RegisDoComponent {
  imagePath = "assets/Marca_Bons_Fluidos2.png"
  donation = {
    cpf: '',
    idade: '',
    cidade: '',
    endereco: '',
    telefone: '',
    doar: 'Absorvente',
    especificar: '',
    quantidade: 0,
    termos: false
  };
  isEspecificarVisible = false;

  constructor(private router: Router, private doarService: DoarService) {} // Injetando o Router para navegação

  setActive(index: number): void {
    // Lógica para setar o botão ativo
  }

  isActive(index: number): boolean {
    // Lógica para verificar o estado ativo
    return false;
  }

  toggleEspecificarField(): void {
    this.isEspecificarVisible = this.donation.doar === 'Outro';
  }
  
  onSubmit(): void {
      const doacao = {
      "cpfUsuario" : Number(this.donation.cpf.trim().replace(".","").replace("-","")),
      "cidade": this.donation.cidade,
      "endereco": this.donation.endereco,
      "telefone": this.donation.telefone,
      "tipo": this.donation.doar === "Outro"? this.donation.especificar: this.donation.doar,
      "quantidade": Number(this.donation.quantidade)
    };
    localStorage.setItem('cpf', doacao.cpfUsuario.toString());
    console.log(doacao);
    this.doarService.doar(doacao).subscribe((msg) => console.log(msg));
    alert('Doação realizada com sucesso!');
    
    // Redireciona para a página /voluntario
    this.router.navigate(['/voluntario']);
    
    // Aqui você pode processar os dados da doação, como enviar para um servidor, etc.
    console.log(this.donation);
    
  }

}
