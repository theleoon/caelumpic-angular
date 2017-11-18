import { Component, Input } from '@angular/core';

@Component({
  selector: 'Foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent {
  @Input() titulo: string = '';
  @Input() url: string = '';
  descricao: string = '';
}
