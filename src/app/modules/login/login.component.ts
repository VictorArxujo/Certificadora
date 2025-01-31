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
      adminId: [''], // Campo para ID de administrador
      adminPassword: [''] // Campo para senha de administrador
    });

    // Observa mudanças no tipo de usuário e ajusta as validações
    this.loginForm.get('userType')?.valueChanges.subscribe((userType) => {
      if (userType === 'voluntario') {
        this.setValidatorsForVoluntario();
      } else {
        this.setValidatorsForAdministrador();
      }
    });

    // Inicializa validações para o tipo padrão
    this.setValidatorsForVoluntario();
  }

  setValidatorsForVoluntario() {
    this.loginForm.get('cpf')?.setValidators([Validators.required]);
    this.loginForm.get('password')?.setValidators([Validators.required]);
    this.loginForm.get('adminId')?.clearValidators();
    this.loginForm.get('adminPassword')?.clearValidators();

    this.updateValidation();
  }

  setValidatorsForAdministrador() {
    this.loginForm.get('adminId')?.setValidators([Validators.required]);
    this.loginForm.get('adminPassword')?.setValidators([Validators.required]);
    this.loginForm.get('cpf')?.clearValidators();
    this.loginForm.get('password')?.clearValidators();

    this.updateValidation();
  }

  updateValidation() {
    this.loginForm.get('cpf')?.updateValueAndValidity();
    this.loginForm.get('password')?.updateValueAndValidity();
    this.loginForm.get('adminId')?.updateValueAndValidity();
    this.loginForm.get('adminPassword')?.updateValueAndValidity();
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