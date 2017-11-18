import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Painel',
  templateUrl: './painel.component.html'
})

export class PainelComponent implements OnInit{
  @Input() titulo: string;

	ngOnInit() {
		this.titulo = this.titulo.length > 10 ?
		this.titulo.substr(0, 10) + '...' :
		this.titulo;
	}
}