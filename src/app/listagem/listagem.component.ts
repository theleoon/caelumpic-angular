import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../Foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  ngOnInit() {
  }

  title: string = 'Caelumpic';
  fotos: Array<FotoComponent> = [];

  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
    .map(resp => resp.json())
    .subscribe(jsonFotos => {
     this.fotos = jsonFotos, erro => console.log(erro)
    })
  }
}
