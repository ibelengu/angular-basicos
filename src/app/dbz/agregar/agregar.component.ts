import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() //recibe del componente padre
  nuevo: Personaje = { nombre: '', poder: 0 }

  //@Output() //envia al componente padre
  //onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService) {

  }
  
  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);


    this.nuevo = { nombre: '', poder: 0 };
  }

}
