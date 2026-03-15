import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

   cadastroForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.cadastroForm = formBuilder.group({
      id: [''],
      email: [''],
      password: ['']
    });

  }

  signUp() {
    const dados = this.cadastroForm.value;

  if(dados.email && dados.password){

    Swal.fire({
      icon: 'success',
      title: 'Usuário criado com sucesso!',
      text: 'Redirecionando para a tela de login...',
      showConfirmButton: false,
      timer: 1500
    });

  } else {

    Swal.fire({
      icon: 'error',
      title: 'Erro ao criar um novo Usuário',
      text: 'Ocorreu um erro desconhecido ao tentar criar um novo usuário.',
      confirmButtonText: 'Tentar Novamente',
      timer: 4000
    });

  }
  }

}
