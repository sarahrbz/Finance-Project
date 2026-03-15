import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      id: [''],
      email: [''],
      password: ['']
    });

  }

  login() {
    const dados = this.loginForm.value;

  if(dados.email && dados.password){

    Swal.fire({
      icon: 'success',
      title: 'Login realizado!',
      text: 'Bem-vindo ao sistema.',
      confirmButtonText: 'OK'
    });

  } else {

    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Informe email e senha.'
    });

  }
  }
}

