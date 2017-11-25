import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'Botao',
	templateUrl: './botao.component.html'
})

export class BotaoComponent {
	@Input() nome: string = 'Ok';
	@Input() estilo: string = 'btn-default';
	@Input() tipo: string = 'button';
	@Input() desabilitado: boolean = false;
	@Output() acao = new EventEmitter();
	@Input() confirmacao: boolean = false;

	executaAcao() {
		if(confirm('Confirmar ação?')) {
			this.acao.emit();
		}
	}
}

