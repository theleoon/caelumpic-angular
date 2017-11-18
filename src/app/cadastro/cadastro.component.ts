import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent {
  foto: FotoComponent = new FotoComponent();
  http: Http;

  constructor(http: Http){
    this.http = http;
  }
  
  cadastrar() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), { headers: headers })
    .subscribe(() => { this.foto = new FotoComponent();
    console.log('Foto salva com sucesso');
    }, erro => console.log(erro));
  }
}