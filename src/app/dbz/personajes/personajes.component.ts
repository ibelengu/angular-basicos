import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent{

  //con @Input le indicamos que es valor que vamos a obtener del componente padre
  //@Input() personajes: Personaje[] = [];
  
  	get personajes() {
		return this.dbzService.personajes; 
  	}
  	constructor( private dbzService: DbzService) {

  	}
}
