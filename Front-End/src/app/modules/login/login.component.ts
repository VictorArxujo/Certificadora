import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userType: ['voluntario', Validators.required], // Tipo de usuário padrão
      cpf: [''], // Campo para voluntário
      password: [''], // Campo para senha de voluntário
    });

    // Inicializa validações para o tipo padrão
    this.setValidators();
  }

  setValidators() {
    this.loginForm.get('cpf')?.setValidators([Validators.required]);
    this.loginForm.get('password')?.setValidators([Validators.required]);

    this.updateValidation();
  }

  updateValidation() {
    this.loginForm.get('cpf')?.updateValueAndValidity();
    this.loginForm.get('password')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Formulário enviado:', formData);

      // Lógica de navegação
      if (formData.userType === 'voluntario') {
        // Redireciona para a página de voluntário
        this.router.navigate(['/voluntario']);
      } else if (formData.userType === 'administrador') {
        // Aqui você pode adicionar a navegação para a página do administrador
        this.router.navigate(['/admin']);
      }
    } else {
      console.log('Formulário inválido.');
    }
  }
}