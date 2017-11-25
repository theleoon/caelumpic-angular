import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../Foto/foto.component';
import { FotoService } from '../Foto/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  ngOnInit() {
  }
  service: FotoService;
  title: string = 'Caelumpic';
  fotos: Array<FotoComponent> = [];
  mensagem: string = '';

  constructor(service: FotoService) {
    this.service = service;
    this.service.lista().subscribe(jsonFotos => {
     this.fotos = jsonFotos, erro => console.log(erro)
    })
  }

  remove(foto) {
		this.service.remove(foto)
		.subscribe(
		(fotos) => {
      let novasFotos = this.fotos.slice(0);
      let indice = novasFotos.indexOf(foto);
      novasFotos.splice(indice, 1);
      this.fotos = novasFotos;
      this.mensagem = 'Foto removida com sucesso';
        },
          erro => { console.log(erro);
          this.mensagem = 'Não foi possível remover a task';
          }
      );
	}
}
