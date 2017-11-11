import { Component, Inject} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Caelumpic';
  fotos: Array<Object> = [];

  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
    .map(resp => resp.json())
    .subscribe(jsonFotos => {
     this.fotos = jsonFotos, erro => console.log(erro)
    })
  }
}
