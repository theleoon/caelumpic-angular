import { Component, Input } from '@angular/core';
import { FotoComponent } from '../Foto/foto.component';
import { FotoService } from '../Foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent {
  operacao: string = 'Cadastro de nova foto';
  smallOperacao: string = 'preencha completamente o formulário';
  foto: FotoComponent = new FotoComponent();
  service: FotoService;
  mensagem: string = '';
  route: ActivatedRoute;
  router: Router;
  formCadastro: FormGroup;

  constructor(service: FotoService, route: ActivatedRoute, router: Router, formBuilder: FormBuilder){
    this.service = service;
    this.route = route;
    this.router = router;
    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose([ Validators.required, Validators.minLength(3) ])],
      url: ['', Validators.compose([ Validators.required, Validators.minLength(10) ])],
      descricao: []
    });

    this.route.params.subscribe(params => {
			let id = params['id'];
			if(id) {
			this.service.buscaPorId(id)
			.subscribe(
      foto => {
        this.operacao = 'Atualização de foto';
        this.foto = foto
			  this.mensagem = 'Foto carregada com sucesso';
			},
				erro => {console.log(erro)
				this.mensagem = 'Houve um erro ao carregar a foto';
				});
			}
		});
  }
  
  cadastrar(event) {
    event.preventDefault();
    this.service.cadastra(this.foto).subscribe(() => { this.foto = new FotoComponent();
    this.mensagem = 'Foto salva com sucesso';
    this.foto = new FotoComponent();
    this.router.navigate(['lista']);
    }, erro => {console.log(erro)
       this.mensagem = 'Houve um erro ao salvar a foto';
    });
  }
}