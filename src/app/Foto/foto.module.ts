import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { CommonModule } from '@angular/common';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ FotoComponent, FiltroPorTitulo ],
  exports: [ FotoComponent, FiltroPorTitulo ],
  providers: [ FotoService ]
})
export class FotoModule {}
