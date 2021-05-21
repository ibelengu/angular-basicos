import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Aquaman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando ...');
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
