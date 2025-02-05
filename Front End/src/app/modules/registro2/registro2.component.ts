import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registro2',
  standalone: false,
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.scss']
  
})
export class Registro2Component {
  imagePath = "assets/Marca_Bons_Fluidos1.png"
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      userType: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      cpf: [''],
      termos: [false, Validators.requiredTrue]
    });

    this.registrationForm.get('cpf')?.setValidators([Validators.required]);
    this.registrationForm.get('adminId')?.updateValueAndValidity();
  }

  isVoluntario(): boolean {
    return this.registrationForm.get('userType')?.value === 'voluntario';
  }

  isAdministrador(): boolean {
    return this.registrationForm.get('userType')?.value === 'administrador';
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const usuario = {
        "tipo": this.registrationForm.get('userType')?.value,
        "nome": this.registrationForm.get('nome')?.value,
        "cpf": Number(this.registrationForm.get('cpf')?.value.trim().replace(".","").replace("-","")),
        "senha": this.registrationForm.get('senha')?.value,
        "email": this.registrationForm.get('email')?.value,        
      };
      console.log(usuario);
      this.authService.signup(usuario).subscribe((msg)=>console.log(msg))
      console.log('Formulário enviado:', this.registrationForm.value);

      // Lógica de navegação corrigida
      if (this.registrationForm.value.userType === 'voluntario') {
        // Redireciona para a página de voluntário
        this.router.navigate(['/voluntario']);
      } else if (this.registrationForm.value.userType === 'administrador') {
        // Aqui você pode adicionar a navegação para a página do administrador
        this.router.navigate(['/admin']);
      }
    } else {
      console.error('Formulário inválido.');
    }
  }
}
